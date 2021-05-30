import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/chithangdoan/zing",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
