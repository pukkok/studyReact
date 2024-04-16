import React , { useState, useEffect} from 'react'
import dummyData from '../dummy/dummyData1'


function Card () {
    let timer = null
    let result = {}

    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')

    const choiceDummy = () => {
        let i = Math.floor(Math.random()*dummyData.length)
        return dummyData[i]
    }

    const pickData = () => {
        let data = choiceDummy()
        return result === data ? pickData() : result = data
    }

    const changeState = () => {
        let data = pickData()
        const {word, meaning} = data

        setWord(word)
        setMeaning(meaning)
    }
    
    
    useEffect(()=>{
        changeState()
        timer = setInterval(() => {
            changeState()
        }, 1000);
    },[])


    const RLockDalLock = () => {
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        return `rgb(${r}, ${g}, ${b})`
    }
    
    const cardStyle = {
        width : '400px',
        height : '150px',
        textAlign : 'left',
        paddingLeft : '20px',
        transition : '.3s'
    }

    return(
        <div style={{...cardStyle, border:`solid 5px ${RLockDalLock()}`}}>
            <h1 style={{color : RLockDalLock()}}>word : <span style={{color : RLockDalLock()}}>{word}</span></h1>
            <h2 style={{color : RLockDalLock()}}>meaning : <span style={{color : RLockDalLock()}}>{meaning}</span></h2>
        </div>
    )
    
}

export default Card


// class Card extends Component {
    
//     state = {
//         word : '',
//         meaning : ''
//     }

//     choiceDummy = () => {
//         let i = Math.floor(Math.random()*dummyData.length)
//         return dummyData[i]
//     }

//     changeState = () => {
//         let data = this.choiceDummy()
//         let { word, meaning } = data
//         if(this.state.word === word){
//             this.changeState()
//         }else{
//             this.setState({word, meaning})
//         }

//     }

//     RLockDalLock = () => {
//         let r = Math.floor(Math.random()*255)
//         let g = Math.floor(Math.random()*255)
//         let b = Math.floor(Math.random()*255)
//         return `rgb(${r}, ${g}, ${b})`
//     }

//     componentDidMount(){
//         this.changeState()
//         setInterval(() => {
//             this.changeState()
//         }, 500);
//     }

//     cardStyle = {
//         width : '400px',
//         height : '150px',
//         textAlign : 'left',
//         paddingLeft : '20px',
//         transition : '.3s'
//     }

//     render(){
//         const {word, meaning } = this.state

//         return(
//                 <div style={{...this.cardStyle, border:`solid 5px ${this.RLockDalLock()}`}}>
//                     <h1 style={{color : this.RLockDalLock()}}>word : <span style={{color : this.RLockDalLock()}}>{word}</span></h1>
//                     <h2 style={{color : this.RLockDalLock()}}>meaning : <span style={{color : this.RLockDalLock()}}>{meaning}</span></h2>
//                 </div>
//         )
//     }

// }
// export default Card