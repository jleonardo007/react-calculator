import { connect } from "react-redux";
import actions from "./Duck/actions";
import CalculatorComponent from "./CalculatorComponent";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch =>{
	const changeTheme = event =>{
		dispatch( actions.changeTheme(event) )
	}

	const clear = () =>{
		dispatch( actions.clear() )
	}

	const addFormula = (button, formula, expression, limit) =>{
		dispatch( actions.addFormula(button, formula, expression, limit) )
	}

	const calcExpression = expression =>{
		dispatch( actions.calcExpression(expression) )
	}

	const maxDigit = () =>{
		dispatch(actions.maxDigit())
	}

	return{
		changeTheme,
		clear,
		addFormula,
		calcExpression,
		maxDigit
	}
}

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComponent);

export default CalculatorContainer;
