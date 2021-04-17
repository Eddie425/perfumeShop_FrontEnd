import axios from "axios";

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
