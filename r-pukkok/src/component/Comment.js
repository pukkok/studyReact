import React from "react";

const Comment = ({name, email, body}) => {
    return(
        <div>
            <p>{body}</p>
            <span>{name} ({email})</span>
        </div>
    )
}
export default Comment