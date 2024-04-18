import React from "react";
import '../style/FlipCard.css'

function FlipCard ({children, handleClick, variant}) {

    return(
        <div className="card" onClick={handleClick}>
            {children}
        </div>
    )
}
export default FlipCard