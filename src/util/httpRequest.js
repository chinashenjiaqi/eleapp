// import './plugins/axios'
import axios from 'axios';
import qs from 'qs';
// import { message } from 'antd';
// import Cookies from 'js-cookie';
// 服务地址的配置
axios.defaults.baseURL = 'http://192.168.1.119/api';

// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token;
    // // const token = '11111';
    // token && (config.headers.Authorization = token);\
    // config.headers.Authorization = Cookies.get('Authorization');
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // console.log('请求正常:'+response);
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    console.log(error.response.status);
    if (error.response.status) {
      switch (error.response.status) {
        // 404请求不存在   
        case 404:
          console.log(404);
          break;
        // 其他错误，直接抛出错误提示   
        case 302:
          window.location.href = "#/login";
          break;
        default:
          console.log(error);
      }
      return Promise.reject(error.response);
    }
  }
);
/**
  * get方法，对应get请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}