import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.min.css";
import CalculatorApp from "./Calculator/CalculatorConatiner";

import calculatorReducer from "./Calculator/Duck/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(calculatorReducer);

ReactDOM.render(
  <Provider store={store}>
    <CalculatorApp />
  </Provider>,
  document.getElementById("root")
);