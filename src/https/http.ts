import { BASE_URL } from "./constant";
import { fetchUserToken } from "./storerage";


interface HTTPParams {
    // method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    method: string;
    url: string;
    headers?: any;
    body?: any,
    isFormData?: boolean;
    isAuth?:true;
}


export interface HTTPResponse<T = any> {
    status: string;
    data: T;
    tokens?:any;
    user?:any;
    message: string;
}

const setAuthorization = () => ({
    Authorization: `Bearer ${fetchUserToken()}`,
  });

export const httpRequest = async (params: HTTPParams): Promise<HTTPResponse> => {

    try {
        const { url, method, body, headers, isAuth ,isFormData = false } = params;

        const setAuth = isAuth && setAuthorization()

        // if (!url) throw new Error("url is not set");
        // if (typeof url !== "string") throw new Error("url must be a string");
        const options: any = {
            method,
            redirect: "follow",
            headers: {
                ...headers,
                ...setAuth
            }
        }

        if (!isFormData) {
            options.headers['Content-Type'] = 'application/json';
        }

        if (body) {
            options.body = isFormData ? body : JSON.stringify(body);
        }

        const res = await fetch(`${BASE_URL}/${url}`, options);
        const result: any = await res.json();
        // const responseData = result.response
        return result;
    } catch (error) {
        throw error;
    }
}