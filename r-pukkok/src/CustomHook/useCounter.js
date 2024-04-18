// 커스텀 훅 : 1초마다 카운트 값 반환

import { useState, useEffect } from "react";

function useCounter(arrLength){
    const [count, setCount] = useState(0)

    useEffect(()=>{

        const increaseCount = () => {
            setCount(count+1)
        }
        
        const timerId = setTimeout(increaseCount, 1000)
        // 클린업 : 리렌더링 되어서 특정 state, props가 변경될때마다 콜백함수가 실행되기 직전 클린업 실행
        // 클린업 === componentDidWillUnmount : 의존성 배열에 빈배열을 설정하기
        return () => {
            clearTimeout(timerId)
        }

    }, [count])

    return count % arrLength // 배열의 길이에 따라 해당 배열의 인덱스값을 반환
}

export default useCounter