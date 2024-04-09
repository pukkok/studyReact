import React, { Component } from 'react'

class NameTag extends Component {
    state = {
        name : '초기값',
        num : 0
    }

    changeName = () => {
        this.setState({name : "바뀐값"})
    }

    render(){
        // console.log('NameTag')
        const {name, num} = this.state
        return (
            <>
                <h1>{name}</h1>
                <button onClick={this.changeName}>이름 변경</button>
            </>
        )   
    }
}

export default NameTag