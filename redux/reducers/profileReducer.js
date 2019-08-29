import { ADD_PROFILE } from '../types.js';

const INITIAL_STATE = [];

// ({
//   user: {
//     gender: 'male',
//     age: 32,
//     photo: ['qwerty123456789'],
//     selectedProfileId: 123,
//   },
//   profilesById: {},
// });

// const stub = {
//   data: {
//     photos: [],
//     numberOfPeople: null,
//     description: null,
//   },
//   tune: {
//     price: null
//   }
// };

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default profileReducer;
