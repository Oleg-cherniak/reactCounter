import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  parityValue,
  handleReset,
  parityCalculate,
}) => {
  return (
    <div>
      <h1>Counter</h1>
      <div className={"wrapper"}>
        <div className={"screen"}>{countValue}</div>
        <div className={"parity"}>{parityValue}</div>
        <div className={"controlsArea"}>
          <button className={"controlsButton"} onClick={handleDecrement}>
            Decrement
          </button>
          <button className={"controlsButton"} onClick={handleReset}>
            Reset
          </button>
          <button className={"controlsButton"} onClick={handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityValue: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  parityCalculate: PropTypes.func.isRequired,
};

export default Counter;
