import React, {useState, useEffect} from 'react'
import './App.css'
import useCounter from './CustomHook/useCounter'
import animals from './Dummy/dummyAnimal'
import words from './Dummy/dummyWord'

// useEffect(콜백함수, 의존성 배열)
// 의존성 배열 : dependency Array
// Effect => 사이드 이펙트(side Effect) 
// 부수효과 => 초기렌더링, 업데이트 될때마다 뭔가 해줘야 하는 것들
// ex 타이머, 서버에서 데이터 조회, 수정, 알림창 표시
// 의존성 배열에 state, props를 설정한경우 : 해당 state, props가
// 변경 될때마다 콜백함수가 실행됨 // componentDidUpdate처럼 동작

function App() {

    // 이미지 갤러리 로직
    const randomIdx = useCounter(animals.length) // 커스텀 훅을 사용하면 상태로직 재사용
    const animal = animals[randomIdx]

    // 플래쉬 카드 로직
    const randomIdx2 = useCounter(words.length)
    const dic = words[randomIdx2]

    return(
        <div className='App'>
            <h1>이미지 갤러리</h1>
            <img src={animal.src} alt={animal.title}/>
            <h2>{animal.title}</h2>

            <br/>

            <h1>플래쉬 카드</h1>
            <h2>{dic.word}</h2>
            <h3>{dic.meaning}</h3>
        </div>
    )
}

export default App