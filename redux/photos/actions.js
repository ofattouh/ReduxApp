import axios from 'axios';

// const API_URL = 'https://picsum.photos/v2/list';
const API_URL = 'https://jsonplaceholder.typicode.com';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_PHOTOS_PENDING = 'FETCH_PHOTOS_PENDING';
export const FETCH_PHOTOS_FULFILLED = 'FETCH_PHOTOS_FULFILLED';
export const FETCH_PHOTOS_REJECTED = 'FETCH_PHOTOS_REJECTED';
export const fetchPhotos = () => {
  console.log(`\n\nFetching photos from: ${API_URL}/photos?_page=1&_limit=5`);

  return {
    type: FETCH_PHOTOS,
    payload: axios.get(`${API_URL}/photos?_page=1&_limit=5`),
  };
};

export const ADD_PHOTO = 'ADD_PHOTO';
export const ADD_PHOTO_PENDING = 'ADD_PHOTO_PENDING';
export const ADD_PHOTO_FULFILLED = 'ADD_PHOTO_FULFILLED';
export const ADD_PHOTO_REJECTED = 'ADD_PHOTO_REJECTED';
export const addPhoto = photo => {
  console.log(`\nAdd photo: ${API_URL}/photos`, photo);

  return {
    type: ADD_PHOTO,
    payload: axios.post(`${API_URL}/photos`, photo),
  };
};

export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const REMOVE_PHOTO_PENDING = 'REMOVE_PHOTO_PENDING';
export const REMOVE_PHOTO_FULFILLED = 'REMOVE_PHOTO_FULFILLED';
export const REMOVE_PHOTO_REJECTED = 'REMOVE_PHOTO_REJECTED';
export const removePhoto = photoId => {
  console.log(`\nRemoving photoId: ${API_URL}/photos/${photoId}`);

  return {
    type: REMOVE_PHOTO,
    payload: axios.delete(`${API_URL}/photos/${photoId}`),
    meta: {photoId},
  };
};

//**********************************************/
// Testing the redux store:

/*
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const fetchPhotos = () => {
  return {
    type: FETCH_PHOTOS,
    payload: {
      photos: [
        {
          albumId: 1,
          title: 'Photo 1',
          url: 'http://placehold.it/600/f783bd',
          thumbnailUrl: 'http://placehold.it/150/d83ea2',
          id: 1,
        },
        {
          albumId: 2,
          title: 'Photo 2',
          url: 'http://placehold.it/600/f783bd',
          thumbnailUrl: 'http://placehold.it/150/d83ea2',
          id: 2,
        },
        {
          albumId: 3,
          title: 'Photo 3',
          url: 'http://placehold.it/600/8e6eef',
          thumbnailUrl: 'http://placehold.it/150/bf6d2a',
          id: 3,
        },
      ],
    },
  };
};

export const ADD_PHOTO = 'ADD_PHOTO';
export const addPhoto = photo => {
  return {
    type: ADD_PHOTO,
    payload: photo,
  };
};

export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const removePhoto = photo => {
  return {
    type: REMOVE_PHOTO,
    payload: photo,
  };
};
*/
