import axios from 'axios'

export function request(config) {
  // 创建一个 axios 实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

// 请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
  })

// 响应拦截
  instance.interceptors.response.use(response => {
    return response.data
  },err => {
    console.log(err);
    return err
  })

  return instance(config)               // 这一步发送网络请求，instance 返回一个 promise
}


