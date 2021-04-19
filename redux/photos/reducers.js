import {
  FETCH_PHOTOS_FULFILLED,
  ADD_PHOTO_FULFILLED,
  REMOVE_PHOTO_FULFILLED,
} from './actions';

const initialState = {
  loadedPhotos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_FULFILLED:
      return {
        ...state,
        loadedPhotos: [...action.payload.data],
      };
    case ADD_PHOTO_FULFILLED:
      return {
        ...state,
        loadedPhotos: [action.payload.data, ...state.loadedPhotos],
      };
    case REMOVE_PHOTO_FULFILLED:
      return {
        ...state,
        loadedPhotos: state.loadedPhotos.filter(photo => {
          return photo.id !== action.meta.photoId;
        }),
      };
    default:
      return state;
  }
};

//**********************************************/
// Testing the redux store:

/*
import {FETCH_PHOTOS, ADD_PHOTO, REMOVE_PHOTO} from './actions';

const initialState = () => {
  [];
};

// state is immutable, refers to the global state stored in the redux store
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      console.log('\n\nfetch photos...');
      return {
        ...state,
        photos: [...action.payload.photos],
      };
    case ADD_PHOTO:
      console.log('\n\nAdd photo id: ' + action.payload[0].id);
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      };
    case REMOVE_PHOTO:
      console.log('\n\nremove photo id: ' + action.payload.id);
      return {
        ...state,
        photos: state.photos.filter(photo => {
          return photo.id !== action.payload.id;
        }),
      };
    // if no action is defined, used during reducers first initialization
    default: {
      return state;
    }
  }
};
*/
