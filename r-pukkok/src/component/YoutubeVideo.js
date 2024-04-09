import React from "react";
import PropTypes from 'prop-types'

function YoutubeVideo({id, title, length, description, author , children}){

    return(
        <div id = {id}>
            <h1>{title} - {(parseInt(length)/1000).toFixed(1)}MB</h1>
            <h3>author - {author}</h3>
            <p>{description}</p>
            {children}
        </div>
    )
}

export default YoutubeVideo

// 유효성 검증
YoutubeVideo.propTypes = {
    id : PropTypes.string,
    title : PropTypes.string,
    length : PropTypes.string,
    description : PropTypes.string
}

//props 기본값 설정
YoutubeVideo.defaultProps = {
    author : 'pukkok'
}