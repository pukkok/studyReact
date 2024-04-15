import React, {Component, useRef} from "react";

// 이벤트 핸들러에서 즉각적으로 업데이트된 값을 사용해야 하는 경우
// 화면에 렌더링 할 필요가 없는 값인 경우
const Counter = () => {
    const count = useRef(0)
    // console.log(count)   

    const increase = () => {
        console.log('증가전:', count.current)
        count.current++
        console.log('증가후:', count.current)
    }

    return(
        <>
            <h1>카운팅 : {count.current}</h1>
            <button onClick={increase}>카운팅</button>
        </>
    )
}

export default Counter



// class Counter extends Component{
//     state = {
//         count : 0
//     }
    
//     increase = () => {
//         console.log('증가전 : ', this.state.count)
//         this.setState({count : this.state.count+1}) // 비동기
        
//     }

//     render(){
//         const { count } = this.state
//         console.log('recheck')
//         return (
//             <>
//                 <h1>카운팅 : {count}</h1>
//                 <button onClick={this.increase}>카운팅</button>
//             </>
//         )
//     }
// }
// export default Counter


