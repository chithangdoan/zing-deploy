// constant
import {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_ERROR,
} from "../constants/api/video";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  message: null,
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case FETCH_VIDEO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};

export default video;
