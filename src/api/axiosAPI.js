import axios from "axios";
import authHeader from "./service/AuthHeader";

export default axios.create({
  baseURL: window.location.hostname.includes("localhost")
    ? "http://localhost:8080/perfume/"
    : "https://perfumeshop.herokuapp.com/perfume/",
  headers: authHeader(),
});
