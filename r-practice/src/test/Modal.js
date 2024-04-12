import React from "react";
import Button from "./Button";
import '../style/Modal.css'

function Modal ({open, children}) {
    return(
        <div className={`modal ${open ? 'open' : 'close'}` }>
            {children}
        </div>
    )
}

export default Modal