import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import { IBaseResponse } from '../models/base-response';
import { LocalTokenKey } from '../models/store-keys';
import { getLocalItem } from './local-storage';
import router from '@/router';
import { RouterNameEnum } from '@/router/type';
import { resetStore } from '@/store';

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
      if (status === 401) {
        ElMessage.warning('登陆超时，请重新登陆');
        router.push({ name: RouterNameEnum.Login });
        resetStore();
      } else {
        ElMessage.error(`[${status}] ${message}`);
      }
    } else {
      ElMessage.error('服务不可用');
    }
    return error.response;
  }
);

async function getRequest<T = any, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) {
  return instance.get<T, IBaseResponse<T>, D>(url, config);
}

async function postRequest<T = any, D = any>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D>
) {
  return instance.post<T, IBaseResponse<T>, D>(url, data, config);
}

async function putRequest<T = any, D = any>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D>
) {
  return instance.put<T, IBaseResponse<T>, D>(url, data, config);
}

async function deleteRequest<T = any, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) {
  return instance.delete<T, IBaseResponse<T>, D>(url, config);
}

export const http = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};
