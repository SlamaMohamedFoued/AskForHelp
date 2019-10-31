import { ADD_AVIS } from "./type";

export const addAvis = newAvis => {
  return {
    type: ADD_AVIS,
    newAvis
  };
};
