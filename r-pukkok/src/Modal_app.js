import React, {Component} from 'react'
import './App.css'
import Modal from './component/modal'
import Button from './component/button'

class App extends Component{
    state = {
        open: false
    }

    openModal = () => {
        this.setState({open : true})
    }

    closeModal = () => {
        this.clearInputs()
        this.setState({open : false})
    }
    clearInputs = () => {
        const inputs = document.querySelectorAll('.Modal-body input')
        inputs.forEach(input=> input.value = '')
        
    }

    componentDidUpdate(){
        const firstInput = document.querySelector('.Modal-body input')
        if(this.state.open){
            firstInput.focus()
        }
    }

    handleKeyUp = (e) => {
        console.log(e.key)
        if(e.key === 'Enter'){
            this.closeModal()
        }
    }

    render(){
        const {open} = this.state

        return (
            <div className='App'>
                <Button handleClick={this.openModal}>Add Todo</Button>
                <Modal open={open}>
                    <div className='Modal-header'>You want to add new todo?</div>
                    <div className='Modal-body'>
                        <label>todo name : <input type='text'></input></label><br/>
                        <label>todo description: <input type='text' onKeyUp={this.handleKeyUp}></input></label>
                    </div>
                    <div className='Modal-footer'>
                        <Button size='small'>Add</Button>
                        <Button size='small' handleClick={this.closeModal}>Close</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default App