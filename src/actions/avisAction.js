import { ADD_AVIS, GET_AVIS } from "./type";
import axios from "axios";

export const addAvis = payload => {
  return {
    type: ADD_AVIS,
    payload
  };
};
// Get Avis
export const getAvis = () => dispatch => {
  axios
    .get("/api/avis")
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: GET_AVIS,
        payload: data
      })
    );
};

// ADD Avis
export const addNewAvis = newAvis => dispatch => {
  axios
    .post("/api/avis", newAvis)
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: ADD_AVIS,
        payload: data
      })
    );
};
