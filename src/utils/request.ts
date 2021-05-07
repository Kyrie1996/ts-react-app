import Axios from "axios";
import { message } from "antd";

// 创建自定义实例，指定请求超出时间为20s
const axios = Axios.create({ timeout: 20000 });

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    /*
      返回数据格式：

      successful response:
      {"flag": 0, "data": ""}

      unsuccessful response:
      {"flag": 1, "msg": "error"}
     */
    if (response.data && response.data.flag === 1) {
      const errorMsg = response.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    return Promise.resolve(response.data.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 对 get & post 进行封装
export function get(url: string, data: any) {
  return axios.get(url, { params: data });
}

// 因为 axios.post 默认会将 js objects 序列化成 json 格式。所以选用 axios({ method: "post" }, url, data);
// 这样后端可以省略 json 解析步骤。
export function post(url: string, data: any) {
  return axios({ method: "post", url, data });
}


