import {
  FETCH_EN_REQUEST,
  FETCH_EN_SUCCESS,
  FETCH_EN_FAILURE,
} from "../constants/enTypes";

import { en } from "../locales/en";

export const fetchEnRequest = () => ({
  type: FETCH_EN_REQUEST,
});

export const fetchEnSuccess = (data) => ({
  type: FETCH_EN_SUCCESS,
  payload: data,
});

export const fetchEnFailure = (error) => ({
  type: FETCH_EN_FAILURE,
  message: error,
});

export const fetchEn = () => (dispatch) => {
  dispatch(fetchEnRequest);
  dispatch(fetchEnSuccess(en));
  dispatch(fetchEnFailure("fail"));
};
