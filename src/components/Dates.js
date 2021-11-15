import React from 'react';

function Dates (props) {
    return (
    <div className = "Dates">
        <table width="100%" >
            <tbody>
            <td className="d-flex justify-content-start">
                {props.date.map((date, index) => <p key={index} className= "m-2">{date}</p>)}    
            </td>
            </tbody>
        </table>
    </div>
    )
}

export default Dates