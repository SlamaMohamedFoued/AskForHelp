import { ADD_MESSAGE, GET_MESSAGES } from "./type";
import axios from "axios";

export const addMessage = newMessage => {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  };
};

export const getMessages = () => dispatch => {
  axios.get("/messages").then(res =>
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    })
  );
};
