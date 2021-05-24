import {
  FETCH_EN_REQUEST,
  FETCH_EN_SUCCESS,
  FETCH_EN_FAILURE,
} from "../constants/enTypes";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: {},
  message: "",
};

const enReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };
    case FETCH_EN_FAILURE:
      return {
        ...state,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};

export default enReducers;
