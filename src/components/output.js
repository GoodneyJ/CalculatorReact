import React from 'react'

//Component renders outputs
export default function output(props) {
    if(props.result === undefined) {
        return (
            <div id="output-container">
                <div id="display">
                    {props.input.length ===  0 ? '0' : props.input.map(item => {
                        return(item)
                    })}

                </div>
            </div>
        )
    } else if(props.result !== undefined) {
        return (
        <div id="output-container">
            <div id="display">
                {props.result}
            </div>
        </div>
        )
    } else if(props.result !== undefined && props.operatorInput !== 'null') {
        return (
        <div id="output-container">
            <div id="display">
                {`${props.result} ${props.operator} ${props.input}`}
            </div>
        </div>
        )
    }
}
