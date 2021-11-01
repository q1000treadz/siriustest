import { put, takeEvery, call, all, fork } from 'redux-saga/effects'
import { GET_IMAGES, REMOVE_IMAGE } from '../types'
import { getImgSuccess, removeImageSuccess, removeImageFailed } from '../actions/action'
import RNFS from 'react-native-fs'

const API_KEY = '563492ad6f91700001000001ac7b229946744dbeb972e48d6549df2d';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* getDataFromServer() {
  const response = yield call(fetch, 'https://api.pexels.com/v1/curated?per_page=40', { method: 'GET', headers: { Accept: 'application/json', Authorization: API_KEY } });
  const responseBody = yield response.json();
  let photos = responseBody.photos;
  let parsedImages = photos.map((photo) => photo.src.original);
  let downloadedImages: Array<string> = [];
  for (let i = 0; i < parsedImages.length; i++) {
    let strIndex = i.toString();
    yield call(RNFS.downloadFile, { fromUrl: parsedImages[i], toFile: `${RNFS.DocumentDirectoryPath}/${strIndex}.png` });
    downloadedImages.push(`${RNFS.DocumentDirectoryPath}/${strIndex}.png`);
  }
  yield put(getImgSuccess(downloadedImages))
}

function* getImagesWatcher() {
  yield takeEvery(GET_IMAGES, getDataFromServer);
}

function* deleteImage(action) {
  let exists = yield call(RNFS.exists, action.path);
  if (exists) {
    yield call(RNFS.unlink, action.path);
    yield put(removeImageSuccess(action.id))
  } else {
    yield put(removeImageFailed(action.id))
  }
}

function* removeImagesWatcher() {
  yield takeEvery(REMOVE_IMAGE, deleteImage);
}

export function* mainSaga() {
  yield all([fork(getImagesWatcher), fork(removeImagesWatcher)])
}