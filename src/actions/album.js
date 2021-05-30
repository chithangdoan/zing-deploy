// api
import albumApi from "../api/albumApi";
// constant
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_ERROR,
} from "../constants/api/album";

const fetchAlbumRequest = () => ({
  type: FETCH_ALBUM_REQUEST,
});

const fetchAlbumSuccess = (album) => ({
  type: FETCH_ALBUM_SUCCESS,
  data: album,
});

const fetchAlbumError = (error) => ({
  type: FETCH_ALBUM_ERROR,
  message: error,
});

export const fetchPaginationAlbum = (page, limit) => async (dispatch) => {
  dispatch(fetchAlbumRequest);

  await albumApi.pagination(page, limit).then(
    (album) => dispatch(fetchAlbumSuccess(album)),
    (error) => dispatch(fetchAlbumError(error))
  );
};

export const fetchAllAlbum = () => async (dispatch) => {
  dispatch(fetchAlbumRequest);

  await albumApi.getAll().then(
    (album) => dispatch(fetchAlbumSuccess(album)),
    (error) => dispatch(fetchAlbumError(error))
  );
};

// Return promise with success and failure actions
