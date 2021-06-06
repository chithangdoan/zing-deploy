// api
import loveApi from "../api/loveApi";
// constant
import {
  FETCH_LOVE_REQUEST,
  FETCH_LOVE_SUCCESS,
  FETCH_LOVE_ERROR,
} from "../constants/api/love";

const fetchLoveRequest = () => ({
  type: FETCH_LOVE_REQUEST,
});

const fetchLoveSuccess = (love) => ({
  type: FETCH_LOVE_SUCCESS,
  data: love,
});

const fetchLoveError = (error) => ({
  type: FETCH_LOVE_ERROR,
  message: error,
});

export const fetchPaginationLove = (page, limit) => async (dispatch) => {
  dispatch(fetchLoveRequest);

  await loveApi.pagination(page, limit).then(
    (love) => dispatch(fetchLoveSuccess(love)),
    (error) => dispatch(fetchLoveError(error))
  );
};

export const fetchAllLove = () => async (dispatch) => {
  dispatch(fetchLoveRequest);

  await loveApi.getAll().then(
    (love) => dispatch(fetchLoveSuccess(love)),
    (error) => dispatch(fetchLoveError(error))
  );
};

// Return promise with success and failure actions
