import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    friends: [
      {name: 'victoria', age: 13, city: 'seoul'},
      {name: 'sun', age: 34, city: 'busan'},
      {name: 'johseb', age: 25, city: 'busan'},
      {name: 'syleemomo', age: 9, city: 'seoul'},
      {name: 'hannah', age: 41, city: 'daegu'},
      {name: 'shara', age: 37, city: 'seoul'},
      {name: 'martin', age: 28, city: 'daegu'},
      {name: 'gorgia', age: 39, city: 'seoul'},
      {name: 'nana', age: 24, city: 'busan'},
      {name: 'dannel', age: 19, city: 'seoul'},
    ],
    updatedFriends: null
  }
  // 구현하기
  filterCity = (city) => {
    this.setState(({friends})=>{
      let filtered = friends.filter((friend) => friend.city === city)
      return {updatedFriends : filtered}
    })
  }

  // 구현하기
  render(){
    let { friends, updatedFriends } = this.state 

    return (
      <>
        <button onClick={() => this.filterCity("seoul")}>서울</button>
        <button onClick={() => this.filterCity("busan")}>부산</button>
        <button onClick={() => this.filterCity("daegu")}>대구</button>
        {(updatedFriends ? updatedFriends : friends).map(({name, age, city}, i) => {
          return (
          <div key={i}>
            <span>이름 : {name} 나이 : {age} 지역 : {city}</span>
          </div>
          )
        })}
      </>
    ) 
  }
}

export default App;