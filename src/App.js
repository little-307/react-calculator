import { useReducer } from "react";
import DigitButton from "./components/DigitButton";

import "./styles.css"

// Create global variable ACTIONS
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

// Reducer(state, action)  state = (currentOperand, previousOperant, operation). action break into {type, payload} - ACTIONS
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state 
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state 
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

      default:
  }
}


function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  //dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1}})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
          </div>
        <div className="current-operand">
          {currentOperand}
          </div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <DigitButton digit = "1" dispatch={dispatch} />
      <DigitButton digit = "2" dispatch={dispatch} />
      <DigitButton digit = "3" dispatch={dispatch} />
      <button>*</button>
      <DigitButton digit = "4" dispatch={dispatch} />
      <DigitButton digit = "5" dispatch={dispatch} />
      <DigitButton digit = "6" dispatch={dispatch} />
      <button>+</button>
      <DigitButton digit = "7" dispatch={dispatch} />
      <DigitButton digit = "8" dispatch={dispatch} />
      <DigitButton digit = "9" dispatch={dispatch} />
      <button>-</button>
      <DigitButton digit = "." dispatch={dispatch} />
      <DigitButton digit = "0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;


