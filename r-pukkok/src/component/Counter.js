import React, {Component} from "react";

class Counter extends Component{
        state = {
        count : 0
    }

    increase = () => {
        // const { count } = this.state
        this.setState(prevState => {
            console.log(prevState) // 업데이트 최신상태
            return {count : prevState.count+1}})

    }

    increaseMultiple = () => {
        this.increase()
        this.increase()
        this.increase()
    }

    // 원본을 변경하는 배열 메서드 : 잘 사용하지 않음
    // 새로운 배열을 만들어서 반환하는 배열 메서드 : 리액트에서 자주 사용함
    // 스프레드 연산자, 비구조화 할당, map, filter, reduce

    render(){
        console.log('child')
        const { count } = this.state
        console.log('state in render function ' + count)
        return (
            <>
                <h1>{count}</h1>
                <button onClick={this.increaseMultiple}>카운터</button>
            </>
        )
    }
}
export default Counter


