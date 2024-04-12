import React , {Component} from 'react'
import '../style/Button.css'

function Button({f, children}){
    
    return(
        <button onClick={f}>{children}</button>
    )
    
}

export default Button

Button.defaultProps = {
    
}