import React, {Component} from 'react'
import './App.css'
import SideBar from './Component/SideBar'
import Button from './Component/Button'

class App extends Component{

    constructor(props){
        super(props)
        this.fileInput = React.createRef()
    }
    state = {
        imgs : []
    }
    
    inputClick = () => {
        this.fileInput.current.click()
    }
    
    handleChange = () => {
        const { files } = this.fileInput.current
        console.log(this.fileInput)

        this.setState({imgs:[...files]})
    
    }
    
    render(){
        const { imgs } = this.state
        console.log(imgs)
        return(
            <>
                <div>
                    {imgs.map((img, id) => {
                        const src= URL.createObjectURL(img)
                        console.log(img)
                        return (
                        <div key={id}>
                            <h1>{img.name}</h1>
                            <img src={src}></img>
                        </div>
                        )
                    })}
                </div>
                <Button handleClick={this.inputClick}>Upload</Button>
                <input className="Upload" style={{display:'none'}}
                type="file" onChange={this.handleChange} 
                ref={this.fileInput} accept="image/*" multiple/>

            </>
        )
    }   
}

export default App