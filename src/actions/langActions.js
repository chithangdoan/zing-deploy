import { FETCH_LANG_REQUEST } from "../constants/langTypes";

export const fetchLangUpdate = (lang) => ({
  type: FETCH_LANG_REQUEST,
  payload: lang,
});

export const fetchLang = (lang) => (dispatch) => {
  dispatch(fetchLangUpdate(lang));
};
