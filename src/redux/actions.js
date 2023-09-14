import axios from "axios";
import {
  ADD_TO_FAVORITE,
  DATA_LOAD,
  DELETE_FROM_FAVORITE,
  GET_FAVORITE_LIST,
  LOADER_OFF,
  LOADER_ON,
} from "./types";

export const loadOn = () => {
  return {
    type: LOADER_ON,
  };
};
export const loadOff = () => {
  return {
    type: LOADER_OFF,
  };
};

export const dataLoad = () => {
  return async (dispatch) => {
    try {
      dispatch(loadOn());
      const { data } = await axios.get("http://localhost:3000/store");
      dispatch({
        type: DATA_LOAD,
        data: data,
      });

      dispatch(loadOff());
    } catch (err) {
      alert("Error API");
    }
  };
};
export const addToFavorite = (item) => {
  try {
    axios
      .post("http://localhost:3000/favorite", { ...item })
      .then((response) =>
        console.log(response)
      ).catch(e => alert('Карточка уже добавлена'));
    return {
      type: ADD_TO_FAVORITE,
    };
  } catch {
    console.log("error >>>");
  }
};
export const deleteFromFavorite = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/favorite/${id}`);

    dispatch(getFavorite());
  };
};
export const getFavorite = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3000/favorite");

      dispatch({
        type: GET_FAVORITE_LIST,
        list: data,
      });
    } catch (e) {
      alert(e);
    }
  };
};
