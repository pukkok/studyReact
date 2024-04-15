import React, {Component, useRef} from 'react'
// import React, {useRef} from 'react'

// class CustomInput extends Component {
//     constructor(props){
//         super(props)
//         this.textInput = ['Name', 'Password', 'ConfirmPassword'] 

//         // 레퍼런스 : 내가 제어하고자 하는 엘레먼트
//     }

//     focusInput = (id, e) => {
//         console.log(this.textInput)

//         for(let input of this.textInput){
//             input.current.style.backgroundColor = 'white'
//         }
//         this.textInput[id].current.style.backgroundColor = 'red'

//         // this.textInput.current.focus() // ref 사용하기
//     }

//     render(){
//         return(
//             <>
//             {this.textInput.map((lableName, id) => {
//                 this.textInput[id] = React.createRef() // ref 생성ㅎ가ㅣ
//                 return (
//                     <div key={id}>
//                         <label>{lableName}
//                             <input type='text' ref={this.textInput[id]}
//                                 onClick={(e)=> this.focusInput(id, e)}
//                             />
//                         </label>
//                     </div>
//                 )
//             })}
//             </>
//         )
//     }
// }

// export default CustomInput


function CustomInput(props){
    const textInput = useRef(['Name', 'Password', 'ConfirmPassword'])

    console.log(textInput)

    const focusInput = (id, e) => {

        for(let input of textInput.current){
            input.current.style.backgroundColor = 'white'
        }
        textInput.current[id].current.style.backgroundColor = 'red'

        // this.textInput.current.focus() // ref 사용하기
    }

    return(
        <>
        없음
        {textInput.current.map((lableName, id) => {
            textInput.current[id] = React.createRef() // ref 생성ㅎ가ㅣ
            return (
                <div key={id}>
                    <label>{lableName}
                        <input type='text' ref={textInput.current[id]}
                            onClick={(e)=> focusInput(id, e)}
                        />
                    </label>
                </div>
            )
        })}
        </>
    )

}

export default CustomInput
