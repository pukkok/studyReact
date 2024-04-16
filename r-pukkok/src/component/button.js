import React from "react";
import '../Style/button.css';

function Button ({children, size, color, width, handleClick, disabled}){
    return <button 
        className={`Button ${size} ${color} ${width} ${disabled && 'blocked'}`}
        onClick={handleClick} disabled={disabled}
        >{children}</button>
}

export default Button

Button.defaultProps = {
    size: 'medium',
    color: 'tomato',
    disabled: false
}