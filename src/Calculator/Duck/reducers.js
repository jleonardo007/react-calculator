import types from "./types";

const initialState = {
  formula: [],
  expression: "",
  result: "",
  theme: "classic",
  digitLimit: false
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return { ...state, theme: action.newTheme };

    case types.CLEAR:
      return {
        ...state,
        formula: action.formula,
        expression: action.expression,
        result: action.result,
        digitLimit: action.digitLimit
      };

    case types.FORMULA:
      return {
        ...state,
        formula: action.formula,
        expression: action.expression,
        result: action.value
      };

    case types.CALCEXP:
      return {
        ...state,
        formula: action.formula,
        expression: action.expression,
        result: action.result
      };

    case types.MAXDIGIT:
      return {
        ...state,
        result: action.warning,
        digitLimit: action.digitLimit
      };

    default:
      return state;
  }
};

export default calculatorReducer;
