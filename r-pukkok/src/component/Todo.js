import React, { Component } from "react";

const Todo = ({user, name, done, description}) => {
    return (
        <>
            <h2>사용자 : {user}</h2>
            <h3>할일 : {name}</h3>
            <h4>종료 여부 : {done? "종료" : "진행중"}</h4>
            <p>상세 내용 : {description}</p>
        </>
    )
}


// class문법
// class Todo extends Component {

//     state = { // 멤버변수
//         name : "cleaning",
//         done : false,
//         description : "cleaning my room on weekends"
//     }

//     changeTodoList = () => {
//         this.setState({ 
//             name : "washing",
//             done : true,
//             description : 'washing my clothes'
//         }) // state에서 값을 가져고 싶을때 setState 사용
//     }

//     // UI (html 템플릿) => jsx 문법
//     render(){
//         const { name, done, description } = this.state
//         console.log(this.props)
//         const {user, age} = this.props
//         return (
//             <>
//                 <h2>사용자 : {user}({age})</h2>
//                 <h3>할일 : {name}</h3>
//                 <h4>종료 여부 : {done ? '종료' : '진행중'}</h4>
//                 <p>설명 : {description}</p>
//                 <button onClick={this.changeTodoList}>할일 변경</button>
//             </>
//         )
//     }
// }

export default Todo