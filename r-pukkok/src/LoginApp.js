import React, {Component, useRef, useState, useEffect} from 'react'
import './App.css'
import Button from './Component/Button'

class App extends Component{
    state = {
        id: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name] : value })
    }

    login = (e) => {
        e.preventDefault() // 새로고침 방지
        const {id, password} = this.state
        alert(`
            아래 정보로 로그인을 진행하시겠습니까?

            - ID: ${id} / PASSWORD: ${password}
        `)
    }

    render(){
        const {id, password} = this.state

        return(
            <div className='App'>
                <form>
                    <label>ID <input type='text' placeholder='Type your ID' onChange={this.handleChange} name='id' value={id} autoFocus/></label>
                    <label>PASSWORD <input type='password' placeholder='Type your Password' onChange={this.handleChange} name='password' value={password}/></label>
                    <div className='login-btn'>
                        <Button handleClick={this.login}>LOGIN</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App