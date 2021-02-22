import { SET_MODAL_INFO } from "./ActionTypes";

const StateReducer = (state, action) => {
  switch (action.type) {
    case SET_MODAL_INFO:
      console.log(action.payload);

      return {
        ...state,
        modalInfo: action.payload,
      };
    default:
      return state;
  }
};

export default StateReducer;
