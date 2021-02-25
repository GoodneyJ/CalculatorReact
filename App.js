import React, { useState } from 'react';
import './css/App.css';

import Output from './components/output.js'
import Keypad from './components/keypad.js';



function App() {
  document.title = "CalculatorJS";

  const [input, setInput] = useState([]);
  const [storedInput, setStoredInput] = useState([]);
  const [result, setResult] = useState(undefined); 
  const [counter, setCounter] = useState(0);
  const [negCheck, setNegCheck] = useState(false);
  const [validDecimalChecker, setValidDecimalChecker] = useState(0);
  const [operatorInput, setOperatorInput] = useState(undefined);

  
  const clearHooks = (value) => {
    setCounter(0);
    setStoredInput([]);
    setInput([]);
    setResult(value);
    setNegCheck(false);
    setOperatorInput(undefined);
  }

  const executeOperation = () => {
    let itemOne = parseFloat(storedInput);
    let itemTwo;
    if(negCheck == true) {
      itemTwo = parseFloat(input.join('') * -1);
    } else {
      itemTwo = parseFloat(input.join(''));
    }

    if(result === undefined) {
      switch(operatorInput) {
        case('+'):
          let sum = itemOne + itemTwo;
          console.log(`${itemOne} ${operatorInput} ${itemTwo} = ${sum}`);
          clearHooks(sum);
          break;
        case('-'):
          let difference = itemOne - itemTwo;
          console.log(`${itemOne} ${operatorInput} ${itemTwo} = ${difference}`);
          clearHooks(difference);
          break;
        case('x'):
          let product = itemOne * itemTwo;
          console.log(`${itemOne} ${operatorInput} ${itemTwo} = ${product}`);
          clearHooks(product);
          break;
        case('/'):
          let quotient = itemOne / itemTwo;
          console.log(`${itemOne} ${operatorInput} ${itemTwo} = ${quotient}`);
          clearHooks(quotient);
          break;      
      }
    } else {
      switch(operatorInput) {
        case('+'):
          let sum = result + itemTwo;
          console.log(`${result} ${operatorInput} ${itemTwo} = ${sum}`);
          clearHooks(sum);
          break;
        case('-'):
          let difference = result - itemTwo;
          console.log(`${result} ${operatorInput} ${itemTwo} = ${difference}`);
          clearHooks(difference);
          break;
        case('x'):
          let product = result * itemTwo;
          console.log(`${result} ${operatorInput} ${itemTwo} = ${product}`);
          clearHooks(product);
          break;
        case('/'):
          let quotient = result / itemTwo;
          console.log(`${result} ${operatorInput} ${itemTwo} = ${quotient}`);
          clearHooks(quotient);
          break;      
      }
    }
  }

  const storeOperator = (value) => {
    if(value === 'add') {
      setOperatorInput(operator => operator = '+');
    } else if(value === 'subtract') {
      setOperatorInput(operator => operator = '-');
    } else if(value === 'multiply') {
      setOperatorInput(operator => operator = 'x');
    } else if(value === 'divide') {
      setOperatorInput(operator => operator = '/');
    } else if(value === 'equals' && operatorInput !== undefined) {
      executeOperation()
    }
  }

  const handleClick = (e) => {
    if(e.target.id === "clear") {

      //Clears State: Input, if counter==2, clears all Stored State Arrays
      setInput([]);
      setCounter(counter => counter + 1);
      setValidDecimalChecker(0);
      if(counter === 1) {
        clearHooks(undefined);
      }

      //Checks input for non-numeral input, stores current input into StoredInput array of arrays
    } else if(e.target.id === "add" || e.target.id === "multiply" || e.target.id === "divide" || e.target.id === "subtract" || e.target.id === "add" || e.target.id === "equals" || e.target.id === "+/-" ) {
      console.log(parseFloat(input.join('')))
      setStoredInput([...storedInput, parseFloat(input.join(''))]);
      setInput([]);
      setValidDecimalChecker(0);

      //Checks to see if the input was negative
      if(e.target.id === 'subtract' && operatorInput !== undefined) {
        console.log('woaahah')
        setNegCheck(!negCheck);
      } else {
        if(negCheck) {
          setNegCheck(!negCheck)
          storeOperator(e.target.id);
        } else {
          storeOperator(e.target.id);
        }
      }



      //Stores numerals into input state array
    } else if(e.target.id === 'decimal') {
      if(validDecimalChecker === 0) {
        setInput(prevItems => [...prevItems, e.target.textContent]);
        setValidDecimalChecker(checker => checker + 1);
      } else {
        console.log('too many!')
      }
    } else if(input[0] === '0') {
      console.log('too many')
      if(e.target.id !== 'zero') {
        setInput(prevItems => [...prevItems, e.target.textContent])
      }
    } else {
        setInput(prevItems => [...prevItems, e.target.textContent])
      
    }

  }

  return (
    <div className="App">
      <Output input={input} stored={storedInput} result={result} operator={operatorInput}/>
      <Keypad handleClick={handleClick}/>
    </div>
  );
}

export default App;
