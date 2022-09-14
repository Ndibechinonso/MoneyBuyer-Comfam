import { BASE_URL } from "./constant";
import { clearData, fetchUserToken } from "./storage";
import axios from "axios";

// interface HTTPParams {
//   // method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
//   method: string;
//   url: string;
//   headers?: any;
//   body?: any;
//   isFormData?: boolean;
//   isAuth?: true;
// }

export interface HTTPResponse<T = any> {
  status: number;
  data: T;
  tokens?: any;
  user?: any;
  message?: string;
  count?: number;
}

/** general headers **/
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  x_api_key: "D77961BB64A885E6B716E699EA52B",
};

const setAuthorization = () => ({
  Authorization: `Bearer ${fetchUserToken()}`,
});

/** axios instance **/
const instance = axios.create({
  baseURL: BASE_URL,
  headers,
});

/** timeout configuration for axios instance **/
instance.defaults.timeout = 60000;

/** axios interceptor to trigger a logout on unauthorized error response code **/
instance.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    if (
      error.response &&
      (error.response.status === 307 ||
        error.response.status === 403 ||
        error.response.status === 401)
    ) {
      clearData();
      window.location.reload();
      return Promise.reject({
        status: 401,
        message: "Login session expired, please login again",
      });
    }

    return Promise.reject(
      error
        ? error.response
          ? error.response.data
          : error.response
        : "Something Went wrong!!!"
      // : Language.NetworkErrorMessage.errorMessage
    );
  }
);

/** make an axios get request **/
export const makeGetRequest = (path: string) => instance.get(path);

/** make an axios post request **/
export const makePostRequest = (path: string, payload: any) =>
  instance.post(path, payload);

/** make an axios request for a guest **/
export const makeUnauthorizedRequestWithHeadersAndPayload = async (
  method: string,
  url: string,
  data: any
) => {
  const response = await instance.request({
    method,
    url,
    data,
    headers,
  });
  return response;
};

/** make an axios request for logged-in user **/
export const makeAuthorizedRequestWithHeadersAndPayload = async (
  method: string,
  url: string,
  data: any = {}
) => {
  const response: HTTPResponse = await instance.request({
    method,
    url: url,
    data,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });
  return response;
};
export const makeAuthorizedImageUpload = async (
  url: string,
  data: FileList
) => {
  const response = await instance.request({
    method: "GET",
    url: url,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });

  const res = await axios({
    method: "PUT",
    url: response.data.url,
    data: data.item(0),
    headers: { "Content-Type": data.item(0).type },
  });

  return { response, res };
};

export const makeAuthorizedImageDownload = async (url: string) => {
  const response = await instance.request({
    method: "GET",
    url: url,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });

  return response.data.url;
};

/** make an axios request to submit a file for a logged in user **/
export const makeRequestWithFormData = async (
  method: string,
  url: string,
  data: any,
  authorized: any
) => {
  /** create new formdata object **/
  let formData = new FormData();

  let headers = {
    "Content-Type": "multipart/form-data",
  };

  /** loop through and append all data to formdata object **/
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let fieldData = data[key];
      formData.append(key, fieldData);
    }
  }

  if (authorized) {
    headers = { ...headers, ...setAuthorization() };
  }

  const response = await instance.request({
    method,
    url: url,
    data: formData,
    headers,
  });

  return response;
};
