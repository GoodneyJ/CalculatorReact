import React from 'react'

//Component renders button interface
export default function keypad(props) {
    return (
        <div id="keypad-container">
            <div id="operator-btns-container">
                <div className="row">
                    <div id="one" className="keypad-btn" onClick={props.handleClick}>1</div>
                    <div id="two" className="keypad-btn" onClick={props.handleClick}>2</div>
                    <div id="three" className="keypad-btn" onClick={props.handleClick}>3</div>
                    <div id="divide" className="keypad-btn" onClick={props.handleClick}>/</div>
                </div>
                <div className="row">
                    <div id="four" className="keypad-btn" onClick={props.handleClick}>4</div>
                    <div id="five" className="keypad-btn" onClick={props.handleClick}>5</div>
                    <div id="six" className="keypad-btn" onClick={props.handleClick}>6</div>
                    <div id="multiply" className="keypad-btn" onClick={props.handleClick}>X</div>
                </div>
                <div className="row">
                    <div id="seven" className="keypad-btn" onClick={props.handleClick}>7</div>
                    <div id="eight" className="keypad-btn" onClick={props.handleClick}>8</div>
                    <div id="nine" className="keypad-btn" onClick={props.handleClick}>9</div>
                    <div id="subtract" className="keypad-btn" onClick={props.handleClick}>-</div>
                </div>
                <div className="row">
                    <div id="zero" className="keypad-btn" onClick={props.handleClick}>0</div>
                    <div id="decimal" className="keypad-btn" onClick={props.handleClick}>.</div>
                    <div id="+/-" className="keypad-btn" onClick={props.handleClick}>+/-</div>
                    <div id="add" className="keypad-btn" onClick={props.handleClick}>+</div>
                </div>
            </div>
            <div id="utility-btns" className="row">
                <div id="equals" className="keypad-btn" onClick={props.handleClick}>=</div>
                <div id="clear" className="keypad-btn" onClick={props.handleClick}>CE</div>
            </div>


        </div>
    )
}
