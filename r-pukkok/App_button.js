import React, {Component} from 'react'
import './App.css'
import Button from './component/button'

class App extends Component{
    handleClick = () => alert('clicked button!')

    render(){
        return (
            <div className='App'>
                <Button size='small' color='blue' handleClick={this.handleClick} disabled={true}>Add Todo</Button>
                <Button size='medium' color='tomato'><img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>Update Todo</Button>
                <Button size='large' color='grey'>Remove Todo</Button>
            </div>
        )
    }
}

export default App