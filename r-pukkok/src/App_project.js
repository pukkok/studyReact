import React, { Component } from 'react';
import './App.css';
import Movie from './component/Movie'

class App2 extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading : true,
      movies : []
    }
  }

  componentDidMount(){
    fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
    .then(res => res.json())
    .then(result => {
      const {data : {movies}} = result
      console.log(movies)
      this.setState({ loading : false, movies })
    })
  }

  render(){
    const { loading, movies } = this.state
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width : '60%',
      margin: '100px auto',
      textAlign: 'center'
    }

    const laodingStyle = {
      position : 'absolute',
      left: '50%',
      top: '50%',
      fontSize: '2rem',
      transform: 'translate(-50%, -50%)'
    }
    if(loading){
      return (
        <div style={laodingStyle}>
          <h1>Loading...</h1>
        </div>
      )
    }else{
      return (
        <div style={style}>
          {movies.length !==0 && movies.map(movie => {
            return (
              <Movie 
                key = {movie.id}
                title = {movie.title}
                genres = {movie.genres}
                cover = {movie.medium_cover_image}
                summary = {movie.summary}
              />
            )
          })}
        </div>
      )
    }
  }
}

export default App2;

// 중괄호 안에 for, if 사용못함

// 엘리먼트 자체가 길 경우 리액트 엘리먼트를 변수에 저장하여 사용한다 
// => 컴파일시 객체가 되므로 변수에 저장 가능

// function 키워드 함수 : 내부에 자체적인 this 값을 가짐
// 자바스크립트 - window 객체
// 리액트 - undefined
// 화살표 함수 : 내부에 자체적인 this 값을 가지고 있지 않음 - 외부에서 찾음


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