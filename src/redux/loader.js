// store.js
import { createStore } from "redux";

// Initial state
const initialState = {
  loader: false,
};

// Action types
const LOADER_ON = "LOADER_ON";
const LOADER_OFF = "LOADER_OFF";
const NONE = "NONE";

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loader: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        loader: false,
      };
    case NONE:
      return state;
    default:
      return state;
  }
};

// Action creators
export const turnOnLoader = () => ({ type: LOADER_ON });
export const turnOffLoader = () => ({ type: LOADER_OFF });
export const getLoaderValue = () => ({ type: NONE });

// Create store
const store = createStore(reducer);

export default store;
