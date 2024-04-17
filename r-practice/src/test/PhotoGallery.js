import React, { Component, useState } from 'react'

function PhotoGallery () {
    const [photos, setPhotos] = useState([])

    const addPhoto = () => {
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
        if(photo) setPhotos([...photos, photo])
    }

    const removePhoto = (e, i) => {
        const removeCheck = prompt('진짜 지우꺼야? 응/아니', '응')

        if(removeCheck === '응'){
            setPhotos(()=>{
                return photos.filter((photo, idx)=>{
                    return idx !== i
                })
            })
        }
    }

    const boxStyle = {
        border : 'solid 1px red',
        width: '100vw',
        height: '500px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows : 'repeat(2, 1fr)'
    }

    return(
        <>
            <button onClick={addPhoto}>사진 추가하기</button>
            <h1> 포토 갤러리 </h1>
            ---------------------------
            <div style={boxStyle}>
            {photos.map((photo, i) => {
                return(
                    <>
                        <div key={i} onClick={ e => removePhoto(e, i)} id={i}>
                            <img style={{width:'100%', height: '100%'}}  src = {photo}></img>
                        </div>
                    </>
                ) 
            })}
            </div>
            {photos.map((photo, i)=> {
                return (
                <div key={i}>
                    경로 : {photo}
                </div>
                )
            })}
        </>
    )
}

// class PhotoGallery extends Component{
//     state = {
//         photos: []
//     }

//     //구현하기
//     addPhoto = () => {
//         const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
//         if(photo){
//             this.setState(prevState => {
//                 prevState.photos.push(photo)
//                 return {photos : prevState.photos}
//             })
//         }
//     }

//     // 구현하기
//     render(){
//         const {photos} = this.state
//         return(
//             <>
//                 <button onClick={this.addPhoto}>사진 추가하기</button>
//                 <h1> 포토 갤러리 </h1>
//                 ---------------------------
//                 <div style={{border : 'solid 1px red', width: '100vw', height: '500px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows : 'repeat(2, 1fr)'}}>
//                 {photos.map((photo, i) => {
//                     return <img style={{width:'100%', height: '100%'}} key={i} src = {photo}></img>
//                 })}
//                 </div>
//             </>
//         )
//     }
// }
export default PhotoGallery