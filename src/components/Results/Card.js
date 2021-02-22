import React, { useContext } from "react";
import { SET_MODAL_INFO } from "../../context/ActionTypes";
import { StateContext } from "../../context/index";

const Card = ({ data }) => {
  const { state, dispatch } = useContext(StateContext);

  const handleClick = () => {
    dispatch({ type: SET_MODAL_INFO, payload: data });
  };

  return (
    <img onClick={handleClick} width={400} src={data.images.original.url} />
  );
};

export default Card;
