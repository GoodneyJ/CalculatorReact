import React, { useState } from 'react';
import './css/App.css';

import Output from './components/output.js'
import Keypad from './components/keypad.js';



function App() {

  const [input, setInput] = useState([]);
  const [storedInput, setStoredInput] = useState(0);
  const [counter, setCounter] = useState(0);
  const [validZeroChecker, setValidZeroChecker] = useState(0);
  const [validDecimalChecker, setValidDecimalChecker] = useState(0);
  const [operatorInput, setOperatorInput] = useState('null');


  const executeOperation = () => {
    let itemOne = storedInput;


    let itemTwo = parseFloat(input.join(''));

    if(operatorInput === 'add') {
      let sum = itemOne+itemTwo;
      console.log(`${itemOne} + ${itemTwo} = ${sum}`)
      setStoredInput(storedInput - storedInput);
      setInput([]);
      console.log(storedInput);
    } else {
      console.log('wack');
    }
  }

  const handleClick = (e) => {
    if(e.target.id === "clear") {

      //Clears State: Input, if counter==2, clears all Stored State Arrays
      setInput([]);
      setCounter(counter => counter + 1);
      setValidDecimalChecker(0);
      if(counter === 2) {
        setCounter(0);
        setInput([]);
        setStoredInput(0);
      }

      //Checks input for non-numeral input, stores current input into StoredInput array of arrays
    } else if(e.target.id === "add" || e.target.id === "multiply" || e.target.id === "divide" || e.target.id === "subtract" || e.target.id === "add" || e.target.id === "equals" || e.target.id === "+/-" ) {
      setStoredInput(parseFloat(input.join('')));
      setInput([]);
      setValidDecimalChecker(0);

      if(e.target.id === 'add') {
        setOperatorInput(operator => operator = 'add');
      } else if(e.target.id === 'subtract') {
        setOperatorInput(operator => operator = 'subtract');
      } else if(e.target.id === 'multiply') {
        setOperatorInput(operator => operator = 'multiply');
      } else if(e.target.id === 'divide') {
        setOperatorInput(operator => operator = 'divide');
      } else if(e.target.id === 'equals' && operatorInput !== 'null') {
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
      <Output input={input}/>
      <Keypad handleClick={handleClick}/>
    </div>
  );
}

export default App;
