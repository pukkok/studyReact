import React, { Component } from 'react'
import '../style/style.css'

class Lotto extends Component {
  checkArr = []
  state = {
    numbers : []
  }

  pickRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max-min+1) ) + min
  }
  
  picked = () => {
    let num = this.pickRandomNumber(1, 45)

    this.checkArr.includes(num) ? this.picked() : this.checkArr.push(num)

    return this.checkArr.length<6 ? this.picked() : this.checkArr
  }

  rePicked = () => {
    this.checkArr = []
    let rePick = this.picked()
    // rePick.sort((a,b)=> a-b)
    this.setState({numbers : rePick})
  }
  
  componentDidMount(){
    this.rePicked()
    this.timerId = setInterval(() => {
      this.rePicked()
    }, 1000);      
  }

render(){
    const {numbers} = this.state
    return(
      <>
      <h1>로또번호 자동 생성기</h1>
      <div className='lotto'>{numbers.length>0 ? numbers.map((number, i)=> <p key={i}>{number}</p>) : <div>불가능</div>}</div>
      </>
    )
}
  
}

export default Lotto;