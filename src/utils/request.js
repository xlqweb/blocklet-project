import axios from "axios";
import { ElMessage } from "element-plus";
// create an axios instance
const service = axios.create({
    baseURL: '', // url = base url + request url
    timeout: 5000 // request timeout
  })

  // request interceptor
service.interceptors.request.use(
    config => {
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

// response interceptor
service.interceptors.response.use(
    response => {
      const res = response.data
      if(res.status ===404){
        ElMessage({
            message: res.message || 'Error',
            type: 'error',
            duration: 3 * 1000
          });
      }else{
          return res;
      }
    },
    error => {
        console.log('err' + error) // for debug
        ElMessage({
          message: error.message,
          type: 'error',
          duration: 3 * 1000
        })
        return Promise.reject(error)
      }
)
export default service
  