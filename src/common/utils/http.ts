import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import { IBaseResponse } from '../models/base-response';
import { LocalTokenKey } from '../models/store-keys';
import { getLocalItem } from './local-storage';

const instance = axios.create({
  baseURL: 'https://exam.xujingling.xyz',
  timeout: 10000
});

instance.interceptors.request.use((request) => {
  if (request.headers) {
    const token = getLocalItem(LocalTokenKey);
    request.headers['Authorization'] = token || '';
  }
  return request;
});

instance.interceptors.response.use(
  (response: AxiosResponse<IBaseResponse>) => {
    const { data } = response;
    if (data && data.message) {
      ElMessage.success(data.message);
    } else if (data && data.errorMsg) {
      ElMessage.error(data.errorMsg);
    }
    return data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const { error: message, status } = error.response.data;
      ElMessage.error(`[${status}] ${message}`);
    } else {
      ElMessage.error('服务不可用');
    }
    // return error.response;
  }
);

async function getRequest<T = any, R = IBaseResponse<T>>(
  url: string,
  config?: AxiosRequestConfig<T>
) {
  return instance.get<T, R>(url, config);
}

async function postRequest<T = any, R = IBaseResponse<T>>(
  url: string,
  data: T,
  config?: AxiosRequestConfig<T>
) {
  return instance.post<T, IBaseResponse<R>>(url, data, config);
}

async function putRequest<T = any, R = IBaseResponse<T>>(
  url: string,
  data: T,
  config?: AxiosRequestConfig<T>
) {
  return instance.put<T, IBaseResponse<R>>(url, data, config);
}

async function deleteRequest<T = any, R = IBaseResponse<T>>(
  url: string,
  config?: AxiosRequestConfig<T>
) {
  return instance.delete<T, IBaseResponse<R>>(url, config);
}

export const http = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};
