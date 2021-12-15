import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css'; //index.css파일을 import
import App from './App'; //*App.js파일에 있는 'App컴포넌트'를 import
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/*'App컴포넌트'(리액트를 통해 만든 사용자 정의 태그)*/}
  </React.StrictMode>,
  document.getElementById('root') //index.html에 있는 id가 root인 태그(이 태그안에 App컴포넌트가 들어감!)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
