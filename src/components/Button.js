import React from "react";
import './Button.css';



function ButtonNext (props) {
    return (
        <>
        <div className= "d-flex justify-content-end Button">
        <button className="ButtonNext" onClick={()=>{props.onButtonClick()} }>next</button>
    </div>
    
    <p>{props.next}</p>
        </>
    )
}

function ButtonPrev(props) {
    return (
        <>
        <div className= "d-flex justify-content-start Button">
        <button className="ButtonPrev" onClick= {props.onButtonClick}>previous</button>
    </div>
    <p>{props.prev}</p>
        </>
    )
}


export {ButtonNext, ButtonPrev}