import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.15.3:3333",
  baseURL: "http://localhost:3000",
});

export default api;
