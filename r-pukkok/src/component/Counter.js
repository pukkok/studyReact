import React, {Component} from "react";

class Counter extends Component{
    timerId = null
    state = {
        count : 0
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({count : this.state.count + 1})
        }, 1000);
    }
    componentWillUnmount(){
        alert('해당 컴포넌트를 보이지 않도록 하시겠습니까?')
        clearInterval(this.timerId)
    }
    render(){
        const { count } = this.state
        return (
            <>
                <h1>카운팅 : {count}</h1>
            </>
        )
    }
}
export default Counter


