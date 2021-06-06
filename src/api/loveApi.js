// libs
import axiosClient from "./axiosClient";

const loveApi = {
  getAll(params) {
    const url = "/loves";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/loves/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/loves";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/loves/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/loves/${id}`;
    return axiosClient.delete(url);
  },
  pagination(page, limit = 2) {
    const url = `/loves?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
};

export default loveApi;
