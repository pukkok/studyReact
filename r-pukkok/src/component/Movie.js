import React from "react";

function Movie ({title, genres, cover, summary}) {
    const style = {
        width : '230px',
        height : '500px',
        backgroundColor : 'white',
        margin : '10px',
        boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px'
    }
    return(
        <div style={style}>
            <img src={cover} alt={title}/>
            <h3>{title}</h3>
            <h4>{genres.join(" ")}</h4>
            {/* <p>{summary}</p> */}
        </div>
    )

}

export default Movie