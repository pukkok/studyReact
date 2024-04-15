import React, {Component, useRef, forwardRef} from "react";

const ScrollBox = forwardRef((props, ref) => {

    const style = {
        border: '1px solid orange',
        height: '500px',
        width: '500px',
        overflow: 'auto',
        position: 'relative',
        scrollBehavior: 'smooth'
    }

    const innerStyle = {
        width: '100%',
        height: '1000px',
        background: 'linear-gradient(white, orange)'
    }

    return(
        <>
            <div style={style} ref={ref}>
                <div style={innerStyle}></div>
            </div>
        </>
    )
})

export default ScrollBox









// class ScrollBox extends Component{

//     constructor(props){
//         super(props)
//         this.box = React.createRef()
//     }

//     scrollToBottom = () => {
//         const { scrollHeight, clientHeight } = this.box.current
//         this.box.current.scrollTop = scrollHeight - clientHeight
//     }

//     render(){
//         const style = {
//             border: '1px solid orange',
//             height: '500px',
//             width: '500px',
//             overflow: 'auto',
//             position: 'relative',
//             scrollBehavior: 'smooth'
//         }

//         const innerStyle = {
//             width: '100%',
//             height: '1000px',
//             background: 'linear-gradient(white, orange)'
//         }

//         return(
//             <>
//                 <div style={style} ref={this.box}>
//                     <div style={innerStyle}></div>
//                 </div>
//             </>
//         )
//     }
// }

// export default ScrollBox