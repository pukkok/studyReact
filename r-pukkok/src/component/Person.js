// 자바스크립트 모듈 : 재사용 가능한 파일이나 객체

import React, { Component } from "react";

// Component = React.Component
const Person = ({name, age}) => {
    return (
        <>
            <h3>{name}</h3>
            <h4>{age}</h4>
        </>
    )
}

export default Person