import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import ReactCard from './Component/ReactCard'
import { FaHeart } from 'react-icons/fa6'

class App extends Component{
    numOfCards = 9

    state = {
        sx: {backgroundColor: '#0e1111',
            color: 'lightgrey', 
            borderRadius: '10px'}, // 카드의 디폴트 스타일
        selectIds: [] // 액티브 스타일을 적용할 카드의 ID값 리스트
    }

    selectFlipCard = (id) => {
        const {selectIds} = this.state
        if(!selectIds.includes(id)){ // 클릭한 카드가 액티브가 아닌 경우
            console.log('추가: ', selectIds)
            this.setState({selectIds : [...selectIds, id]}) 
        }else{
            console.log('삭제: ', selectIds)
            this.setState({selectIds : selectIds.filter(sId => sId !== id)})
        }
    }

    render(){
        const {selectIds, sx} = this.state
        console.log('사용자가 선택한 카드의 ID값: ', selectIds)
        return(
            <div className='App'>
                {new Array(this.numOfCards).fill(0).map((_, id)=>{
                    const active = selectIds.includes(id) // 액티브 조건
                    // const activeStyle = active ? {
                    //     transform: 'rotateY(180deg)',
                    //     backgroundColor: 'violet'
                    // } : {}
                    const activeStyle = active && 'active' // 액티브 스타일
                    return (
                        <ReactCard key={id} sx={{...sx}} handleClick={()=> this.selectFlipCard(id)}>
                            <div className='thumbnail-img'>
                                <img className='thumbnail' src={logo} alt={logo}/>
                                <span className={`likes ${activeStyle}`}><FaHeart/></span>
                            </div>
                            <div className={`thumbnail-info ${activeStyle}`}>
                                <h3 className='title'>제목</h3>
                                <p className='description'>이미지 설명</p>
                            </div>
                        </ReactCard>
                    )
                })}
            </div>
        )
    }
}

export default App