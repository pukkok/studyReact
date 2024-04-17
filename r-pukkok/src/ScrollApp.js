import React, {Component} from 'react'
import './App.css'


class App extends Component{
    pageNum = 1

    state = {
        keyWord: '',
        photos: []
    }

    handleChange = (e) => {
        this.setState({keyWord : e.target.value})
    }

    getPhotos = async () => {
        const data = await fetch(`https://api.unsplash.com/search/photos?query=${this.state.keyWord}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20&page=${this.pageNum}`)
        const dataJson = await data.json() // 자바스크립트 객체 또는 배열로 전환
        return dataJson.results
    }

    searchPhotos = async (e) => {
        e.preventDefault() // 새로고침 방지
        const photos = await this.getPhotos() // 사진 목록 조회
        if(photos.length === 0) alert('사진이 없음')
        this.setState({ photos })
    }

    handleScroll = async () => {
        const photoContainer = document.querySelector('.App-photo-container')
        if(photoContainer.scrollTop === photoContainer.scrollHeight - photoContainer.clientHeight){
            this.pageNum++ // 다음페이지의 사진 목록 조회
            const photos = await this.getPhotos() // 사진 목록 조회
            this.setState({ photos : [...this.state.photos, ...photos] })
        }
    }

    render(){
        // console.log(process.env.REACT_APP_UNSPLASH_API_KEY)

        const {keyWord, photos} = this.state

        return(
            <div className='App'>
                <form className='App-search-container'>
                    <input type='text' onChange={this.handleChange} value={keyWord} placeholder='검색어 입력'/>
                    <button type='submit' onClick={this.searchPhotos}>검색</button>
                </form>

                <div className='App-photo-container' onScroll={this.handleScroll}>
                    {photos.length > 0 ? 
                    photos.map(photo => <img className='App-photo-item' key={photo.id} src={photo.urls.small} alt={photo.alt_description}/>) 
                    : <div>원하시는 사진을 <br/> 검색창에서 찾아보세요!</div>}
                </div>
            </div>
        )
    }
}

export default App