// libs
import axiosClient from "./axiosClient";

const albumApi = {
  getAll(params) {
    const url = "/albums";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/albums/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/albums";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/albums/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/albums/${id}`;
    return axiosClient.delete(url);
  },
  pagination(page, limit = 2) {
    const url = `/albums?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
};

export default albumApi;
