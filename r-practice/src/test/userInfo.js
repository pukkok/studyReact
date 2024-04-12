import './App.css';
import React, { Component } from 'react'

const users = [
  {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
  {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
  {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
  {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
  {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
  {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
  {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
  {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
  {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
  {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
]

class App extends Component {

  state = {
    users : users
  }

  componentDidMount(){
    this.setState({users : users.filter(({name, age, city, email}) => {
      return (
        age>0 && Number.isInteger(age) &&
        email.includes('@') && email.endsWith(`.com`)
      )
    })})
  }

  render(){
    return(
      <>
      <h1>* 유효한 사용자 정보 *</h1>    
        {this.state.users.map(({name, age, city, email}, i) => {
          return(
            <div key={i}>
              <h2>{name}({age})</h2>
              <h3>{city}</h3>
              <h3>{email}</h3>
            </div>
          )
        })}
      </>
    )
  }
}

export default App;