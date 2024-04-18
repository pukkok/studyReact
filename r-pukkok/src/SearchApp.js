import React, {Component} from 'react'
import './App.css'


class App extends Component{
    pageNum = 1
    perPage = 20

    state = {
        keyWord: '',
        photos: [],
        index:0
    }

    handleChange = (e) => {
        this.setState({keyWord : e.target.value})
    }

    getDataJson = async () => {
        const data = await fetch(`https://api.unsplash.com/search/photos?query=${this.state.keyWord}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=${this.perPage}&page=${this.pageNum}`)
        const dataJson = await data.json() // 자바스크립트 객체 또는 배열로 전환
        console.log(dataJson)
        return dataJson
    }

    searchPhotos = async (e) => {
        e.preventDefault() // 새로고침 방지
        const getData = await this.getDataJson() // 사진 목록 조회
        const photos = await getData.results
        if(photos.length === 0) alert('사진이 없음')
        this.setState({ photos })
    }

    handleScroll = async () => {
        const photoContainer = document.querySelector('.App-photo-container')
        if(photoContainer.scrollTop === photoContainer.scrollHeight - photoContainer.clientHeight){
            this.pageNum++ // 다음페이지의 사진 목록 조회
            const getData = await this.getDataJson() // 사진 목록 조회
            const photos = await getData.results // 사진 목록 조회
            this.setState({ photos : [...this.state.photos, ...photos] })

            if(this.pageNum > getData.total_pages){
                alert('마지막 사진 입니다.')
            }
        }
    }

    openModal = (e) => {
        this.setState({index : +e.target.id})
        document.querySelector('.App-Modal').classList.add('on')
    }

    closeModal = (e) => {
        e.stopPropagation()
        const modal = document.querySelector('.App-Modal')
        if(e.target === modal){
            modal.classList.remove('on')
        }
    }

    prevImg = () => {
        const {index} = this.state
        this.setState({index : index - 1 < 0 ? this.pageNum * this.perPage - 1 : index - 1 })
    }

    nextImg = () => {
        const {index} = this.state
        this.setState({index : index + 1 > this.pageNum * this.perPage - 1 ? 0 : index + 1 })
    }



    render(){

        const {keyWord, photos, index} = this.state

        return(
            <>
            <div className='App'>
                <form className='App-search-container'>
                    <input type='text' onChange={this.handleChange} value={keyWord} placeholder='검색어 입력'/>
                    <button type='submit' onClick={this.searchPhotos}>검색</button>
                </form>

                <div className='App-photo-container' onScroll={this.handleScroll}>
                    {photos.length > 0 ? 
                    photos.map((photo, i) => <img className='App-photo-item' id={i} key={photo.id} src={photo.urls.small} alt={photo.alt_description} onClick={this.openModal}/>) 
                    : <div>원하시는 사진을 <br/> 검색창에서 찾아보세요!</div>}
                </div>
            </div>
            <div className='App-Modal' onClick={this.closeModal}>
                <div className='App-img-box'>
                    {photos.length>0? <img src={photos[index].urls.regular}/> : ''}
                </div>
                <button onClick={this.prevImg}>PREV</button>
                <button onClick={this.nextImg}>NEXT</button>
            </div>
            </>
        )
    }
}

export default App