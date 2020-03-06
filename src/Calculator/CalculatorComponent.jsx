import React from "react";
import buttons from "./calculator_buttons";

const Button = ({ button, click }) => {
  return (
    <div
      id={button.id}
      className="button"
      data-value={button.keyValue}
      onClick={click}
    >
      {button.keyValue}
    </div>
  );
};

class Calculator extends React.Component {
 
  handleClick = e => {
    const { formula, expression, digitLimit } = this.props;
    if (formula.length > 20) this.props.maxDigit();
    if (e.target.id === "theme") this.props.changeTheme(e);
    if (e.target.id === "clear") this.props.clear();
    if (e.target.id === "equals") this.props.calcExpression(expression);
    if (
      e.target.id !== "theme" &&
      e.target.id !== "clear" &&
      e.target.id !== "equals"
    )
      this.props.addFormula(e.target, formula, expression, digitLimit);
  };

  render() {
    const { expression, result, theme } = this.props;
    return (
      <div id="calculator" className={theme}>
        <div id="screen">
          <p id="display"> {expression === "" ? 0 : expression}</p>
          <p id="formula">{result}</p>
        </div>
        {buttons.map((button, index) => {
          return (
            <Button key={index} button={button} click={this.handleClick} />
          );
        })}
      </div>
    );
  }
}

export default Calculator;
