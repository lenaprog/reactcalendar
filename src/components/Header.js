import React from 'react'
import './Header'

function Header(props) {
    return (
        <div className="Header">{props.active}</div>
    )

}

export default Header