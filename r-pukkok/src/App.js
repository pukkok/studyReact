// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

// 중괄호 안에 for, if 사용못함

// 엘리먼트 자체가 길 경우 리액트 엘리먼트를 변수에 저장하여 사용한다 
// => 컴파일시 객체가 되므로 변수에 저장 가능

const loadingPage = <h1>로딩중...</h1>
const homePage = <h1>홈화면</h1>

class App extends Component{
  state = {
    loading : true
  }

  // 라이프 사이클 메서드
  // 렌더 메서드 호출 다음에 자동으로 호출
  componentDidMount(){
    setTimeout(() => {
      this.setState({loading : false})
    }, 1000);
  }

  render(){
    const {loading} = this.state
    if(loading){
      return loadingPage
    }else return homePage
  }
}

export default App;

// render 리턴값 = 리엑트 엘리먼트

// 컴파일 하면 JSX 문법은 객체다.
// return React.createElement(
//   'div',
//   {className : 'greeting'},
//   'Hello'
// )



// 모듈화 해서 사용하기
// const MyComponents = {
//   DatePicker : function(props){
//     return <div>Imagine a {props.color} datePicker here.</div>
//   },

//   Movie : function(props){
//     return <div>Watch movie {props.title} in the future!</div>
//   },

//   Fruit : function(props){
//     return <div>{props.name} is healthy food^^</div>
//   }

// }

// return (
//   <>
//     <MyComponents.DatePicker color = 'Blue'/>
//     <MyComponents.Movie title = '무빙'/>
//     <MyComponents.Fruit name = '딸기'/>
//   </>
// )