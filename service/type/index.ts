import { AxiosRequestConfig, AxiosResponse,InternalAxiosRequestConfig }from "axios"
interface xxmInterceptors<T=AxiosResponse>{
    onRequestSuccess: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
    onRequestFailure: (error: any) => any;
    onResponseSuccess: (response: T) => Promise<T>;
    onResponseFailure: (error: any) => any;
}
 interface XxmConfig<T=AxiosResponse> extends AxiosRequestConfig{
    interceptors?:xxmInterceptors<T>
}
export default XxmConfig
