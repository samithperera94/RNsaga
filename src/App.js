// Imports: Dependencies
import React from 'react';
import {Provider} from 'react-redux';
// Imports: Screens
//import Counter from './screens/Counter';

// Imports: Redux Store
import {store} from './store/store';
import Playlist from './screens/Playlist';
// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Playlist />
    </Provider>
  );
}
