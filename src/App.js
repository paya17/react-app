import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; //*별도의 파일에서 만든 하위 컴포넌트들을 import
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css'; //App.css파일은 import

class App extends Component { //'App컴포넌트'
  render() {
    return (
      <div className="App"> {/*이 태그 안에 들어있는 게 'App컴포넌트의 내용' , *하위 컴포넌트들을 이 안에 주입*/}
        <Subject></Subject> {/*웹브라우저에서는, 이 컴포넌트의 '내용'이 구현됨*/}
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;


/*

***
만들고 싶은 코드를, (별도의 파일에 있는) 여러 개의 컴포넌트들로 정리정돈(분리)한 후에 -Subject.js/TOC.js/Content.js
->App.js에서 이 컴포넌트들을 import한 후, App컴포넌트에 주입
->index.js에서 App컴포넌트를 import한 후, index.html에 App컴포넌트를 주입

*/
