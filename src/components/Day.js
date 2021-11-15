import React from "react";

function Day(props) {
    return (
    <div className = "Day">
        <table width="100%" >
            <tbody>
            <tr className="d-flex justify-content-between">
                {props.day.map((day, index) => <th key={index} className= "m-5">{day}</th>)}    
            </tr>
            </tbody>
        </table>
    </div>
    )
}


export default Day;

