import React, {Component} from "react";

class PropsTest extends Component{
    render(){
        this.props = {user: 'pukkok'} // 작동은 되나 권장하지 않음, 버그로 본다.
        console.log(this.props)

        return(
            <>
                <h1>props 변경하기</h1>
            </>
        )
    }
}
export default PropsTest