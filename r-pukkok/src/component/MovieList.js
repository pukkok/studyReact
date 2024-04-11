import React from "react";
import Movie from './Movie'

function MovieList({ movies }){
    return(
        <>
            {movies.length>0 && movies.map(({id , ...movie})=>{
                return (
                    <Movie 
                    key={id}
                    {...movie}>
                    </Movie>
                )
            })}
        </>
    )
}
export default MovieList