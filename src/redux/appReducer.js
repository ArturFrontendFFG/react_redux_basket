import {
  DATA_LOAD,
  LOADER_OFF,
  LOADER_ON,
  ADD_TO_FAVORITE,
  GET_FAVORITE_LIST,
  DELETE_FROM_FAVORITE,
} from "./types";
const initialState = {
  data: [],
  favorite: [],
  loading: true,
};

export const appReducer = (state = initialState, action) => {
  console.log("action >>>", action);
  switch (action.type) {
    case DATA_LOAD:
      return {
        ...state,
        data: action.data,
      };
    case GET_FAVORITE_LIST:
    return {
        ...state,
        favorite: action.list,
    };
    case DELETE_FROM_FAVORITE: 
     return {
      ...state,
      // favorite: action.newData,
     }

    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
