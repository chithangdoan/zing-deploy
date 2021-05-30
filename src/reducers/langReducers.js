import { FETCH_LANG_REQUEST } from "../constants/langTypes";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: "",
  message: "",
};

const langReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANG_REQUEST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default langReducers;
