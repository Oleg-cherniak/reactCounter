import React, { Component } from "react";

import Counter from "../components/Counter";

class CounterPageContainers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityValue: "Введено нулевое число",
    };
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;
      if (incrementedValue > -1) {
        return {
          countValue: incrementedValue,
        };
      }
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      const decrementedValue = state.countValue - 1;
      if (decrementedValue > -1) {
        return {
          countValue: decrementedValue,
        };
      }
    });
  };

  handleReset = () => {
    this.setState((state) => {
      return {
        countValue: 0,
      };
    });
  };

  parityCalculate = () => {
    this.setState((state) => {
      const parityCalculatedValue = state.countValue;
      if (parityCalculatedValue % 2 === 0) {
        return {
          parityValue: "Введено четное число",
        };
      }
    });
  };

  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        parityValue={this.state.parityValue}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
        parityCalculate={this.parityCalculate}
      />
    );
  }
}

export default CounterPageContainers;
