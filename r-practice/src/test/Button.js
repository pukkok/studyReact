import React , {Component} from 'react'
import '../style/Button.css'

function Button({f, shape,  children}){
    
    return(
        <button className={shape} onClick={f}>{children}</button>
    )
    
}

export default Button

Button.defaultProps = {
    
}