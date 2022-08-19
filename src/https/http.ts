

interface HTTPParams {
    method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    url: string;
    headers?: any;
    body?: any,
    isFormData?: boolean;
}

export interface HTTPResponse<T = any> {
    status: string;
    data: T;
    message: string;
}

const BASE_URL = process.env.BASE_URL

export const httpRequest = async (params: HTTPParams): Promise<HTTPResponse> => {

    try {
        const { url, method, body, headers, isFormData = false } = params;

        if (!url) throw new Error("url is not set");
        if (typeof url !== "string") throw new Error("url must be a string");
        const options: any = {
            method: method || "GET",
            redirect: "follow",
            headers: {
                // "Authorization": `Bearer ${sessionStorage.getItem("i-token")}`,
                // ...headers
            }
        }

        if (!isFormData) {
            options.headers['Content-Type'] = 'application/json';
        }

        if (body) {
            options.body = isFormData ? body : JSON.stringify({ data: body });
        }

        const res = await fetch(`${BASE_URL}/${url}`, options);
        const result: any = await res.json();
        const responseData = result.response
        return responseData;
    } catch (error) {
        throw error;
    }
}