import React from "react";

function Day(props) {
    return (
    <div className="Day">
        <table>
            <tbody>
                <th>{props.day[0]}</th>
                <th>{props.day[1]}</th>
                <th>{props.day[2]}</th>
                <th>{props.day[3]}</th>
                <th>{props.day[4]}</th>
                <th>{props.day[5]}</th>
                <th>{props.day[6]}</th>
            </tbody>
        </table>
    </div>
    )
}


export default Day;

