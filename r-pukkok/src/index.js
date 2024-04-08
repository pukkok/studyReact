// entry 파일 : 리엑트가 가장 먼저 실행하는 스크립트
// entry 파일에서 컴포넌트를 재귀적으로 찾아서 하나로 합친다

// 번들링 bundling : 흩어져 있는 스크립트 파일들을 하나의 스크립트로 합치는 과정

// 트렌스파일링 transfiling : webPack, babel 파일을 변환해준다.
// 자바스크립트 최신문법들을 예전 브라우저에서 동작하도록 호환성 해결

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
