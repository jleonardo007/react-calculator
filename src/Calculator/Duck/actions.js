import types from "./types";
import calculatorButtons from "../calculator_buttons";

const changeTheme = event => {
  const parent = event.target.parentElement.className;

  if (parent === "classic") {
    calculatorButtons[17].keyValue = "Cute";
    return {
      type: types.CHANGE_THEME,
      newTheme: "cute"
    };
  }

  if (parent === "cute") {
    calculatorButtons[17].keyValue = "Engineer";
    return {
      type: types.CHANGE_THEME,
      newTheme: "engineer"
    };
  }

  if (parent === "engineer") {
    calculatorButtons[17].keyValue = "Classic";
    return {
      type: types.CHANGE_THEME,
      newTheme: "classic"
    };
  }
};

const clear = () => {
  return {
    type: types.CLEAR,
    formula: [],
    expression: "",
    result: "",
    digitLimit: false
  };
};

const addFormula = (button, formula, expression, limit) => {
  const value = button.getAttribute("data-value");

  if (!limit) {
    if (!/^[0]+/.test(expression)) formula.push(value);

    //Deleting extra dots
    for (let i = 0; i < formula.length; i++) {
      if (
        (formula[i - 1] === "." && formula[i] === ".") ||
        (formula[i - 2] === "." && formula[i] === ".")
      )
        formula.pop();
    }

    expression = formula.join("");
    return {
      type: types.FORMULA,
      formula,
      expression,
      value
    };
  } else
    return {
      type: types.FORMULA,
      formula,
      expression,
      value: "WARNING Max Digits"
    };
};

const calcExpression = expression => {
  if (expression === "") {
    return {
      type: types.CALCEXP,
      formula: [],
      expression: "",
      result: ""
    };
  } else {
    let multipleOperators = /[+\-x/](?=[+\-x/])/gi;
    let deleteMultipleOperators = "";
    let answer = "";

    if (!multipleOperators.test(expression))
      answer = eval(expression.replace(/x/gi, "*")).toString();
    else {
      deleteMultipleOperators = expression.match(multipleOperators).join("");
      answer = eval(
        /[\-](?=[\d])/.test(expression)
          ? expression.replace(/x/gi, "*")
          : expression.replace(deleteMultipleOperators, "").replace(/x/gi, "*")
      ).toString();
    }

    return {
      type: types.CALCEXP,
      formula: [answer],
      expression: answer,
      result: answer
    };
  }
};

const maxDigit = () => {
  return {
    type: types.MAXDIGIT,
    digitLimit: true
  };
};

export default {
  changeTheme,
  clear,
  addFormula,
  calcExpression,
  maxDigit
};
