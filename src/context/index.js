import React from "react";
import StateReducer from "./StateReducer";

export const StateContext = React.createContext();

const modalInfoState = {
  images: {
    original: {
      url: "",
    },
  },
  title: "",
};

const initialState = {
  modalInfo: modalInfoState,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(StateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default AppProvider;
