import React, {Component} from 'react'
import './App.css'

const foods = ['짜장면', '짬뽕', '탕수육', '깐풍기']

class App extends Component{
    state = {
        selectedItems: [], //사용자가 선택한 옵션 목록
        selectedValue : foods[0]
    }

    checkBoxSelect = (e) => {
        const { selectedItems} = this.state

        if(e.target.checked){
            this.setState({selectedItems: [...selectedItems, e.target.value]})
        }else{
            this.setState({selectedItems: selectedItems.filter(item => item !== e.target.value)})
        }

    }

    radioBtnSelect = (e) => {
        this.setState({selectedValue: e.target.value})
    }

    render(){
        const { selectedItems, selectedValue } = this.state

        return(
            <div className='App'>
                <h1>Checkbox</h1>
                {foods.length>0 && foods.map((food, id) =>                     
                    <label key={id}>
                        <input type='checkbox' onChange={this.checkBoxSelect} value={food}/>
                        <span className={selectedItems.includes(food) ? 'active' : ''}>{food}</span>
                    </label>
                )}
                <h2>사용자가 선택한 음식목록(checkbox)</h2>
                <h3>{selectedItems.length>0 ?
                    selectedItems.join(' ') :
                    '먹고싶은 음식을 선택하세요!'
                }</h3>
                <br/>

                <h1>Radio Button</h1>
                {foods.length>0 && foods.map((food, id) => {
                    return(
                        <label key={id}>
                            <input type='radio' onChange={this.radioBtnSelect} value={food} checked={selectedValue === food}/>
                            <span style={{background: `${selectedValue === food ? 'yellow' : ''}`}}>{food}</span>
                        </label>    
                    )
                })}

                

                <h2>라디오버튼 한개만 선택가능</h2>
            </div>
        )
    }
}

export default App