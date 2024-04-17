import React, {Component} from 'react'
import './App.css'
import Button from './Component/Button'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            fileName: '',
            imgSrc: ''
        }
        this.fileInput = React.createRef() // ref 생성
    }

    isValid = (type) => type === 'image'

    handleChange = (e) => {
        const file = e.target.files[0]
        const imgSrc = URL.createObjectURL(file) //blob 형태의 이미지 임시경로 생성

        if(this.isValid(file.type.split('/')[0])){
            this.setState({ fileName: file.name, imgSrc })
        }else{
            this.setState({ fileName: 'File not valid!', imgSrc: ''})
        }
    }

    openFileWindow = () => {
        this.fileInput.current.click()
    }

    render(){
        const {fileName, imgSrc} = this.state

        return(
            <div className='App'>
                <h1>{fileName}</h1>
                {imgSrc !== '' && <img src={imgSrc} alt='preview-img' width={'300px'} height={'400px'}/>}
                <input className='Upload' type='file' ref={this.fileInput} accept='image/*' onChange={this.handleChange}/>
                <Button handleClick={this.openFileWindow}>이미지 업로드</Button>
            </div>
        )
    }
}

export default App