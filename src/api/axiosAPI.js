import axios from "axios";
import authHeader from "./service/AuthHeader";

// export default axios.create({
//   baseURL: "https://63official.com/api",
//   headers: authHeader(),
// });
// // Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     console.log(
//       "axios.interceptors.request  =================================="
//     );
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// const api = axios.create({
//   baseURL: "https://63official.com/api/",
//   headers: authHeader(),
// });

const axiosApiInstance = axios.create({
  baseURL: "https://63official.com/api/",
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const stoken = await JSON.parse(localStorage.getItem("token"));
    config.headers = {
      token: stoken,
      "Content-Type": "application/json; charset=utf8",
      "Access-Control-Allow-Origin": "*",
      accept: "application/json",
      credentials: "include",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApiInstance;
