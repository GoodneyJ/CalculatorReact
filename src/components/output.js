import React from 'react'

//Component renders outputs
export default function output(props) {
    return (
        <div id="output-container">
            <div id="display">
                {props.input.length ===  0 ? '0' : props.input.map(item => {
                    return(item)
                })}
            </div>
        </div>
    )
}
