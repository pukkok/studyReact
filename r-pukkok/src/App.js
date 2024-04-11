// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counter from './component/Counter'
// 중괄호 안에 for, if 사용못함

// 엘리먼트 자체가 길 경우 리액트 엘리먼트를 변수에 저장하여 사용한다 
// => 컴파일시 객체가 되므로 변수에 저장 가능

// function 키워드 함수 : 내부에 자체적인 this 값을 가짐
// 자바스크립트 - window 객체
// 리액트 - undefined
// 화살표 함수 : 내부에 자체적인 this 값을 가지고 있지 않음 - 외부에서 찾음

class App extends Component{
  
  state = {
    toggle : true
  }
  
  changeToggle = () => {
    this.setState({ toggle : !this.state.toggle})
  }

  render(){
    const {toggle} = this.state
    return (
      <>
        <div>{toggle? <Counter/> : <h1>컨텐츠 없음</h1>}</div>
        <button onClick={this.changeToggle}>컴포넌트 토글</button>
      </>
    )
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


// class App extends Component{
//   state = {
//     loading : true
//   }

//   // 라이프 사이클 메서드
//   // 렌더 메서드 호출 다음에 자동으로 호출
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({loading : false})
//     }, 1000);
//   }

//   render(){
//     const {loading} = this.state
//     if(loading){
//       return loadingPage
//     }else return homePage
//   }
// }

// export default App;



// componentDidMount(){
//   const photoBox = document.querySelector('.photo-box')
//   photoBox.innerHTML = '포토박스'

//   // 1. html 문서의 특정 dom에 직접 접근하는 경우
//   // 2. 서버에서 데이터를 가져올때 (서버접속)
//   // 3. 타이머 설정( setTimeout, setInterval)
// }


// // componentDidUpdate 에서는 가급적 setState 를 호출하지 않는 것이 좋음
// componentDidUpdate(prevProps, prevState){
//   console.log('카운트 업데이트')
//   // console.log('프롭스 : ' , prevProps)
//   console.log('직전 카운트 값 :', prevState)
// }