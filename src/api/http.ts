import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ResponseMetaSchema {
  code: number;
  dateTime: string;
  message: string;
  sId: string;
}

export const instance = axios.create({
  headers: { 'content-type': 'application/json' },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const HTTP = {
  get: <ResponseType>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
    instance.get(url, options),
};
