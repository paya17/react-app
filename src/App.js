import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; 
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css'; 

class App extends Component { //'App컴포넌트'

  constructor(props) { 
    super(props)
    this.state = {  
      subject:{title:"WEB" , sub:"world wide web!"}, 
      mode:'read', //mode프로퍼티 추가
      welcome:{ title:'Welcome', desc:"Hello, React!!"}, //welcome프로퍼티 추가
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"}
      ] 
    }
  }

  render() {
    var _title, _desc = null; //기본값이 null
    if(this.state.mode === 'welcome') { //mode에 따라서, Content컴포넌트 내용이 달라지도록
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc; //나중에 개선할 것임
    }

    return (
      <div className="App"> 
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={fuction() { {/*onChangePage이벤트(*props->Subject컴포넌트에 전달됨) 만들기*/}
            this.setState({mode:'welcome'}); {/*mode를 welcome으로 'state 변경'!*/}
          }.bind(this)}
        ></Subject> 
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content> 
      </div>
    );
  }

}

export default App;


//** 1.App컴포넌트에서 내부정보를 state값에 설정 -> 2.state값을 하위 컴포넌트의 props값으로 전달->하위 컴포넌트의 props값이 하위 컴포넌트 파일로 전달됨
//*App컴포넌트 입장에서는 'state'라는 내부정보 사용했고, 그것을 하위 컴포넌트로 전달할 때는 'props' 이용

//여기부터
//state,props,'event'가 서로 상호작용하면서, 애플리케이션의 '역동성'을 만든다

//Subject컴포넌트의 WEB이나 TOC컴포넌트의 목록을 '클릭'(event)했을 때->각 부분에 맞게 Content컴포넌트의 내용이 달라지도록 (**App컴포넌트의 'state'를 바꾸는 것을 통해)

//*state값 바뀌면->그 state를 가지고 있는 App컴포넌트의 'render'함수가 다시 호출됨->하위컴포넌트들의 'render'함수도 함께 호출됨 (화면이 다시 그려진다)
//*(event발생) -> App컴포넌트에서, state 바뀜->하위컴포넌트들의 props 바뀜 -> 하위컴포넌트에서, 바뀐 props (위와 비슷한 얘기)(화면이 다시 그려진다)
//render함수는 '어떤 HTML을 그릴 것인가'라는 것을 결정하는 함수
//state,props가 바뀌면, 화면이 다시 그려진다

//리액트에서는, 이벤트 다음에 오는 내용을 문자열("")(js문법)이 아닌, 중괄호({})로 묶기
//리액트에서는, 이벤트가 발생하면, 함수의 첫번째 매개변수로 '이벤트객체' e를 준다

//**'event발생하면->state값 바뀌도록'해서 역동성(화면이 다시 그려짐) 부여!
//*state값 변경하려면-> 1.함수 뒤에 '.bind(this)' 추가(강제로 this값 주입) 2.this.setState() 사용(constructor에서는 필요없음)

//이벤트 '만들기'
//*Subject컴포넌트에서 WEB을 클릭했을 때, 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 function이 호출됨->mode를 welcome으로 바꾸는 'state값 변경'이 일어남->Content컴포넌트의 내용이 바뀜
//책 p111 참고!







