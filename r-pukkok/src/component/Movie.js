import React from "react";

function Movie ({id, ...rest}) {
    return(
        <>
            <h1>무비 정보</h1>
            <h3>{rest.title}</h3>
            <h3>{rest.language}</h3>
            <h3>{rest.release}</h3>
            <h3>{rest.length}</h3>
            <h3>{rest.author}</h3>
            <h3>{rest.production}</h3>
        </>
    )

}

export default Movie