import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; 
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css'; 

class App extends Component { //'App컴포넌트'

  constructor(props) { //state쓰려면, constructor함수 작성해야 됨(초기화를 담당)
    super(props)
    this.state = { //state에 내부정보를!, state값을 초기화->Subject컴포넌트의 props(속성)값의 초깃값을 설정할 수 있음
      subject:{title:"WEB" , sub:"world wide web!"}, //프로퍼티에, 데이터(여기선 객체)가 '한개' 일때
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"}
      ] //프로퍼티에, 데이터가 '여러개' 일때->배열로!(대괄호)
    }
  }

  render() {
    return (
      <div className="App"> 
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> {/*원래 props값인 "WEB"은 하드코딩되어있어 뵈기싫음->state를 통해 은닉!*/}
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content> {/*얘는 아직 하드코딩된거를 state통해 은닉안했음*/}
      </div>
    );
  }

}

export default App;


//** 1.App컴포넌트에서 내부정보를 state값에 설정 -> 2.state값을 하위 컴포넌트의 props값으로 전달->하위 컴포넌트의 props값이 하위 컴포넌트 파일로 전달됨
//*state->'내부' 정보(은닉하기 위한!) / props를 통해 컴포넌트 조작 가능
//*App컴포넌트 입장에서는 'state'라는 내부정보 사용했고, 그것을 하위 컴포넌트로 전달할 때는 'props' 이용
//state와 props의 관계

//**외부에서 알 필요가 없는 정보를 철저하게 은닉하는게 좋음(state통해), 밖에서 내부의 값이 보인다면 전선이 삐져나와 있는 핸드폰과 같다