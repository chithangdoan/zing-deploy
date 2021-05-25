// constant
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_ERROR,
} from "../constants/api/album";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  message: null,
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case FETCH_ALBUM_ERROR:
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

export default album;
