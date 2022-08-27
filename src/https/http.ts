import { BASE_URL } from "./constant";
import { clearData, clearUserDetails, fetchUserToken } from "./storerage";
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
}

// const setAuthorization = () => ({
//   Authorization: `Bearer ${fetchUserToken()}`,
// });

// export const httpRequest = async (
//   params: HTTPParams
// ): Promise<HTTPResponse> => {
//   try {
//     const { url, method, body, headers, isAuth, isFormData = false } = params;

//     const setAuth = isAuth && setAuthorization();

//     // if (!url) throw new Error("url is not set");
//     // if (typeof url !== "string") throw new Error("url must be a string");
//     const options: any = {
//       method,
//       redirect: "follow",
//       headers: {
//         ...headers,
//         ...setAuth,
//       },
//     };

//     if (!isFormData) {
//       options.headers["Content-Type"] = "application/json";
//     }

//     if (body) {
//       options.body = isFormData ? body : JSON.stringify(body);
//     }

//     const res = await fetch(`${BASE_URL}/${url}`, options);
//     if (res.status >= 400) {
//       throw new Error();
//     }
//     if (res.status === 401) {
//       clearUserDetails();
//       window.location.reload();
//     }
//     if (res.status === 409) {
//       //   navigate("/");
//       // window.location.pathname
//       // console.log(res.re);
//     }
//     const result: any = await res.json();
//     // const responseData = result.response
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };




/** general headers **/
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

/** authorization header for logged in user **/
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
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 307 || error.response.status === 403)
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
          : null
        // : Language.NetworkErrorMessage.errorMessage
    );
  }
);

/** make an axios get request **/
export const makeGetRequest = (path: string) => instance.get(path);

/** make an axios post request **/
export const makePostRequest = (path: string, payload: any) => instance.post(path, payload);

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
  const response = await instance.request({
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