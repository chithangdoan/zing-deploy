// constant
import {
  FETCH_LOVE_REQUEST,
  FETCH_LOVE_SUCCESS,
  FETCH_LOVE_ERROR,
} from "../constants/api/love";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  message: null,
};

const love = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case FETCH_LOVE_ERROR:
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

export default love;
