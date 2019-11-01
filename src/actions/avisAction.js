import { ADD_AVIS } from "./type";

export const addAvis = payload => {
  return {
    type: ADD_AVIS,
    payload
  };
};
