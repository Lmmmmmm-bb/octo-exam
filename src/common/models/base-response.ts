export interface IBaseResponse<T = any> {
  status: boolean;
  message: string;
  errorCode: number;
  errorMsg: string;
  data: T;
}
