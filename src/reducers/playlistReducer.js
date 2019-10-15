// Initial State
const initialState = {
  playlist: [],
};
// Redux: Counter Reducer
const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAYLIST_SUCCESS': {
      return {
        ...state,
        playlist: action.value,
      };
    }

    default: {
      return state;
    }
  }
};
// Exports
export default playlistReducer;
