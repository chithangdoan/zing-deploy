// api
import videoApi from "../api/videoApi";
// constant
import {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_ERROR,
} from "../constants/api/video";

const fetchVideoRequest = () => ({
  type: FETCH_VIDEO_REQUEST,
});

const fetchVideoSuccess = (video) => ({
  type: FETCH_VIDEO_SUCCESS,
  data: video,
});

const fetchVideoError = (error) => ({
  type: FETCH_VIDEO_ERROR,
  message: error,
});

export const fetchPaginationVideo = (page, limit) => async (dispatch) => {
  dispatch(fetchVideoRequest);

  await videoApi.pagination(page, limit).then(
    (video) => dispatch(fetchVideoSuccess(video)),
    (error) => dispatch(fetchVideoError(error))
  );
};

export const fetchAllVideo = () => async (dispatch) => {
  dispatch(fetchVideoRequest);

  await videoApi.getAll().then(
    (video) => dispatch(fetchVideoSuccess(video)),
    (error) => dispatch(fetchVideoError(error))
  );
};

// Return promise with success and failure actions
