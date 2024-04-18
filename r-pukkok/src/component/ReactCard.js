import React from "react";
import '../Style/ReactCard.css'


// variant : 초기 로딩시 적용할 주요 스타일
// sx : 동적으로 변경되는 스타일
function ReactCard({ children, handleHover, handleClick, variant, sx }){

    return(
        <div className={`Card-container ${variant}`} onClick={handleClick} 
             onMouseEnter={handleHover} style={sx}>
            <div className="Card-contents">
                {children}
            </div>
        </div>
    )
}
export default ReactCard

ReactCard.defaultProps = {
    children: '',
    handleHover: () => console.log('마우스 호버'),
    handleClick: () => console.log('마우스 클릭')
}