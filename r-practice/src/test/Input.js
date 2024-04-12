import React from "react";
import '../style/Input.css'

function Input ({size, color, handleChange, disabled, label, placeholder}){

    return (
        <label className={`${color}`}>
            {label}
            <input className={`${size}`} onKeyUp={handleChange} placeholder={placeholder} disabled={disabled}/>
        </label>
    )
}

export default Input