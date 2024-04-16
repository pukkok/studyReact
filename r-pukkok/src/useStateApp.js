import React, {Component, useRef, useState, useEffect} from 'react'
import Comment from './Component/Comment'

function App(){
    const postId = useRef(1)
    const [comments, setComments] = useState([])
    // console.log(comments)

    const getComments = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId.current}`)
        .then(res => res.json())
        .then(comments => setComments(comments))
    }

    const showNextComments = () => {
        postId.current++
        getComments()
    }

    useEffect(()=>{ // ComponentDidMount
        getComments()
    }, []) // 빈배열 : 초기 랜더링 시에만 콜백함수 실행 (없다면 ComponentDidUpdate)

    return(
        <>
            <h1>블로그 ({postId.current})</h1>
            <button onClick={showNextComments}>다음</button>
            {comments.length>0 && comments.map(comment => <Comment key={comment.id} {...comment}/>)}
        </>
    )
}

export default App





// class App extends Component{
//     postId = useRef(1) // 블로그 글의 ID값

//     state = {
//         comments: [] // 해당 블로그의 댓글 목록
//     }

//     showNextComments = () => {
//         this.postId++
//         this.getComments()
//     }

//     getComments = () => {
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`)
//         .then(res => res.json())
//         .then(comments => this.setState({comments}))
//     }

//     componentDidMount(){
//         this.getComments()
//     }

//     render(){
//         const {comments} = this.state

//         return(
//             <>
//                 <h1>블로그 ({this.postId})</h1>
//                 <button onClick={this.showNextComments}>다음</button>
//                 {comments.length>0 && comments.map(comment => <Comment key={comment.id} {...comment}/>)}
//             </>
//         )
//     }
// }

// export default App


// class App extends Component{
//     constructor(props){
//         super(props)
//         this.ScrollBox = React.createRef()
//     }

//     moveBox = () =>{
//         console.log(this.ScrollBox.current)
//         const { scrollHeight, clientHeight } = this.ScrollBox.current
//         this.ScrollBox.current.scrollTop = scrollHeight - clientHeight
//     }

//     render(){
//         return(
//             <>
//                 <ScrollBox ref={this.ScrollBox}></ScrollBox> {/** 레퍼런스 설정 */}
//                 <button onClick={this.moveBox}>맨 밑으로</button>
//             </>
//         )
//     }
// }

// export default App