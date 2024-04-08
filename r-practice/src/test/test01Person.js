import React from 'react'

function Person ({name, age, city}) {
    return(
        <>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h4>{city}</h4>
        </>
    )
}

export default Person