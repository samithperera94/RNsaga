// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {getPlaylist} from './playlistSaga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(getPlaylist)]);
}
