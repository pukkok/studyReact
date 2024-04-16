import React, {Component, useRef, useState, useEffect} from 'react'
import './App.css'
import Button from './Component/Button'
import words from './Dummy/dummyWord'

class App extends Component{
    state = {
        words : words
    }

    handleRemove = (id, e) => {
        const word = e.target.previousElementSibling.innerText
        console.log(word)
        alert(`You want to delete word - ${word}`)
        const words = this.state.words.filter((w, index)=>index !== id)
        this.setState({words})
    }

    render(){
        const { words } = this.state // 원본을 사용하지 않고 스테이트에 복사해서 사용

        const wordStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        return(
            <div>
                <h1 style={{textAlign: 'center'}}>Word List</h1>
                {words.map((w, id)=>{
                    return(
                        <div key={id} style={wordStyle}>
                            <h2>{w.word}</h2>
                            <Button size='small' handleClick={(e)=>{this.handleRemove(id, e)}}>Delete</Button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App