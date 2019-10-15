// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import counterReducer from './counterReducer';
import playlistReducer from './playlistReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  playlist: playlistReducer,
});

// Exports
export default rootReducer;
