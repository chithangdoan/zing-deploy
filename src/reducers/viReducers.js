import {
  FETCH_VI_REQUEST,
  FETCH_VI_SUCCESS,
  FETCH_VI_FAILURE,
} from "../constants/viTypes";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: {},
  message: "",
};

const viReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VI_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VI_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };
    case FETCH_VI_FAILURE:
      return {
        ...state,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};

export default viReducers;
