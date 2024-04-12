import './App.css';
import React, { Component } from 'react'
import Button from './test/Button';
import Modal from './test/Modal';

class App extends Component {
  state = {
    open : false,
    removed : false
  }

  openModal = () => {
    this.setState({open : true})
  }

  closeModal = () => {
    this.setState({open : false})
  }

  removeTodo = () => {
    this.setState({open : false, removed : true})
    let firstBtn = document.querySelector('button')
    firstBtn.disabled = true
  }

render(){
    const {open , removed} = this.state

    return(
      <div className='App'>
        <Button f={this.openModal}>Remove Todo</Button>

        {removed? <div>removed successfully!</div> : ''}

        <Modal open={open}>
          <div className="modal-header">You want to remove this todo?</div>
          <div className="modal-body">if you remove this todo, you cannot see this gain later !!</div>
          <div className="modal-footer">
              <Button f={this.removeTodo}>Remove</Button>
              <Button f={this.closeModal}>close</Button>
          </div>
        </Modal>
      </div>
    )
}
  
}

export default App;