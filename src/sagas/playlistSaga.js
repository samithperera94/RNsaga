import {takeLatest, put, call} from 'redux-saga/effects';

const getList = async () => {
  const response = await fetch(
    'https://itunes.apple.com/search?term=jack+johnson&limit=10',
  );
  const myJson = await response.json();

  return myJson.results;
};

function* getPlaylistData() {
  try {
    const data = yield call(getList);

    yield put({
      type: 'GET_PLAYLIST_SUCCESS',
      value: data,
    });
  } catch (error) {
    console.log(error);
  }
}
// Watcher:
export function* getPlaylist() {
  // Take Last Action Only
  yield takeLatest('GET_PLAYLIST', getPlaylistData);
}
