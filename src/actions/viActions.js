import {
  FETCH_VI_REQUEST,
  FETCH_VI_SUCCESS,
  FETCH_VI_FAILURE,
} from "../constants/viTypes";

import { vi } from "../locales/vi";

export const fetchViRequest = () => ({
  type: FETCH_VI_REQUEST,
});

export const fetchViSuccess = (data) => ({
  type: FETCH_VI_SUCCESS,
  payload: data,
});

export const fetchViFailure = (error) => ({
  type: FETCH_VI_FAILURE,
  message: error,
});

export const fetchVi = () => (dispatch) => {
  dispatch(fetchViRequest);
  dispatch(fetchViSuccess(vi));
  dispatch(fetchViFailure("fail"));
};
