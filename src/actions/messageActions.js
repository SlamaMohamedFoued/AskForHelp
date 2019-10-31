import { ADD_MESSAGE } from "./type";

export const addMessage = newMessage => {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  };
};
