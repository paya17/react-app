import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; 
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css'; 

class App extends Component { //'App컴포넌트'
  render() {
    return (
      <div className="App"> 
        <Subject title="WEB" sub="world wide web!"></Subject> {/*속성을 붙임*/} {/*속성값을 바꿀 때마다, 다르게 출력되는 Subject컴포넌트(속성 안붙였을 때는, Subject컴포넌트 항상 똑같이 출력됐음)*/}
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;


//컴포넌트의 속성인 'props'
//**컴포넌트에 속성을 붙이면, 재사용성을 높일 수 있다! -> 속성값을 바꿀 때마다, 다르게 출력되는 Subject컴포넌트(속성 안붙였을 때는, Subject컴포넌트 항상 똑같이 출력됐음)


