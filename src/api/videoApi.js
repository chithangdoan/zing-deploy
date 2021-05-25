import axiosClient from "./axiosClient";

const videoApi = {
  getAll(params) {
    const url = "/videos";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/videos/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/videos";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/videos/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/videos/${id}`;
    return axiosClient.delete(url);
  },
  pagination(page, limit = 2) {
    const url = `/videos?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
};

export default videoApi;
