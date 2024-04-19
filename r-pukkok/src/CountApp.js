import React, {useState, useEffect} from 'react'
import './App.css'
import useCounter from './CustomHook/useCounter'
import animals from './Dummy/dummyAnimal'
import words from './Dummy/dummyWord'

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