import {combineReducers, createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import photos from './photos/reducers';

const reducers = combineReducers({
  photos,
});

// https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(promise));
export const persistor = persistStore(store);

//**********************************************/
// Testing the redux store:

/*
import {fetchPhotos, addPhoto, removePhoto} from './photos/actions';
const store = createStore(reducers);

const unsubscribe = store.subscribe(() => {
  console.log('\nsubscribed to redux data store:');
  console.log(store.getState().photos.photos);
});

store.dispatch(fetchPhotos());

store.dispatch(
  addPhoto([
    {
      albumId: 4,
      title: 'photo 4',
      url: 'http://placehold.it/600/',
      thumbnailUrl: 'http://placehold.it/150/',
      id: 4,
    },
  ]),
);

store.dispatch(removePhoto({id: 1}));

unsubscribe();

export default store;
*/
