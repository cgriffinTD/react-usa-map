import React from "react";

const USAState = (props) => {
  return (
    <path
      d={props.dimensions}
      fill={props.fill}
      data-name={props.state}
      className={`${props.state} state`}
      onClick={props.onClickState}
    >
      <title>Debt Relief in {props.stateName}</title>
    </path>
  );
};
export default USAState;
