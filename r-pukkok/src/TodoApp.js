import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './Component/Button'

function App() {
    const [user, setUser] = useState({
        name : 'pukkok',
        age : 32,
        fruits: [ 'apple', 'banana', 'orange']
    })

    const changeName = () => {
        const newName = prompt('새로운 이름입력')
        setUser({...user, name: newName})
    }

    const [todos, setTodos] = useState([
            {title: 'cleaning', done: false, description: 'cleaning my living room'},
            {title: 'learning', done: false, description: 'learing react on tomorrow morning'},
            {title: 'drinking', done: false, description: 'drinking soju with close friends'}
    ])

    const addTodo = () => {
        const newTitle = prompt('할일 이름')
        const newDone = validCheck()
        const newDescription = prompt('할일 설명')
        setTodos([...todos, {title : newTitle, done : newDone, description: newDescription}])
    }

    function validCheck(){
        const doneChcek = prompt('했어? 응/아니')
        if(doneChcek === '응'){
            return true
        }else if(doneChcek === '아니'){
            return false
        }else{
            alert('응/아니 로만 대답해야해')
            validCheck()
        }
    }

    return(
        <div className='App'>
            <h1>User Information</h1>
            <h2>{user.name} ({user.age})</h2>
            <h3>favorite fruits : {user.fruits.join(' ')}</h3>
            <Button handleClick={changeName}>이름 변경하기</Button>

            <h1>Todo List</h1>
            {todos.map((todo, id)=>{
                return(
                    <div key={id}>
                        <h2>{todo.title} ({todo.done? '완료' : '진행중'})</h2>
                        <p>{todo.description}</p>
                    </div>
                )
            })}
            <Button handleClick={addTodo}>할일 추가하기</Button>
        </div>
    )
}

export default App