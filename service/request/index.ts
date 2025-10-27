import axios,{AxiosInstance}from "axios"
import XxmConfig from '../type/index'
class XxmRequest {
    instance:AxiosInstance
    constructor(config:XxmConfig){
        this.instance = axios.create(config)
        if(config.interceptors){
            this.instance.interceptors.request.use(
                config.interceptors?.onRequestSuccess,
                config.interceptors?.onRequestFailure
            )
            this.instance.interceptors.response.use(
                config.interceptors?.onResponseSuccess,
                config.interceptors?.onResponseFailure
            )
        }
    }  
    request<T>(config:XxmConfig<T>){
       return new Promise<T>((resolve,reject)=>{
           this.instance.request<any,T>(config).then((res)=>{
               resolve(res)
           }).catch((err)=>{
               reject(err)
           })
       })

    }
    get<T>(config:XxmConfig<T>){
        return this.request<T>({...config,method:'GET'})
    }
    post<T>(config:XxmConfig<T>){
        return this.request<T>({...config,method:'POST'})
    }
    
}
export default XxmRequest