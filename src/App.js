import React, { useState } from 'react';
import './css/App.css';

import Output from './components/output.js'
import Keypad from './components/keypad.js';



function App() {

  const [input, setInput] = useState([]);
  const [storedInput, setStoredInput] = useState([]);
  const [result, setResult] = useState(undefined); 
  const [counter, setCounter] = useState(0);
  const [validZeroChecker, setValidZeroChecker] = useState(0);
  const [validDecimalChecker, setValidDecimalChecker] = useState(0);
  const [operatorInput, setOperatorInput] = useState(undefined);


  const clearHooks = (value) => {
    setStoredInput([]);
    setInput([]);
    setResult(value);
  }


  const executeOperation = () => {
    let itemOne = parseFloat(storedInput);
    let itemTwo = parseFloat(input.join(''));

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



  const handleClick = (e) => {
    if(e.target.id === "clear") {

      //Clears State: Input, if counter==2, clears all Stored State Arrays
      setInput([]);
      setCounter(counter => counter + 1);
      setValidDecimalChecker(0);
      if(counter === 1) {
        setCounter(0);
        setInput([]);
        setStoredInput([]);
        setResult(undefined)
      }

      //Checks input for non-numeral input, stores current input into StoredInput array of arrays
    } else if(e.target.id === "add" || e.target.id === "multiply" || e.target.id === "divide" || e.target.id === "subtract" || e.target.id === "add" || e.target.id === "equals" || e.target.id === "+/-" ) {
      console.log(parseFloat(input.join('')))
      setStoredInput([...storedInput, parseFloat(input.join(''))]);
      setInput([]);
      setValidDecimalChecker(0);

      if(e.target.id === 'add') {
        setOperatorInput(operator => operator = '+');
      } else if(e.target.id === 'subtract') {
        setOperatorInput(operator => operator = '-');
      } else if(e.target.id === 'multiply') {
        setOperatorInput(operator => operator = 'x');
      } else if(e.target.id === 'divide') {
        setOperatorInput(operator => operator = '/');
      } else if(e.target.id === 'equals' && operatorInput !== undefined) {
        executeOperation()
      }

      //Stores numerals into input state array
    } else if(e.target.id === 'decimal') {
      if(validDecimalChecker === 0) {
        setInput(prevItems => [...prevItems, e.target.textContent]);
        setValidDecimalChecker(checker => checker + 1);
      } else {
        console.log('too many!')
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
