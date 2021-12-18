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
      mode:'read', //*mode프로퍼티 추가
      selected_content_id:2, //*selected_content_id프로퍼티 추가
      welcome:{ title:'Welcome', desc:"Hello, React!!"}, 
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"}
      ] 
    }
  }

  render() {
    var _title, _desc = null; //기본값이 null
    if(this.state.mode === 'welcome') { //mode에 따라서, 'Content컴포넌트 내용이 달라지도록'
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break; //while문 빠져나감
        }
        i = i+1;
      } //while문 사용
    }

    return (
      <div className="App"> 
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={fuction() {
            this.setState({mode:'welcome'}); 
          }.bind(this)}
          ></Subject> 
        <TOC 
          data={this.state.contents}
          onChangePage={function(id) { {/* *인자로 id값 전달받음*/}
            this.setState({mode:'read', selected_content_id:Number(id)}); {/* **mode를 read로, selected_content_id를 전달받은 id값으로 'state 변경'!*/}
          }.bind(this)}></TOC>
        <Content title={_title} desc={_desc}></Content> 
      </div>
    );
  }

}

export default App;




//Subject컴포넌트의 WEB이나 TOC컴포넌트의 목록을 '클릭'(event)했을 때->각 부분에 맞게 Content컴포넌트의 내용이 달라지도록 (**App컴포넌트의 'state'를 바꾸는 것을 통해)

//*(event발생) -> App컴포넌트에서, state 바뀜->하위컴포넌트들의 props 바뀜 -> 하위컴포넌트에서, 바뀐 props (위와 비슷한 얘기)(화면이 다시 그려진다)

//**'event발생하면->state값 바뀌도록'해서 역동성(화면이 다시 그려짐) 부여!
//*state값 변경하려면-> 1.함수 뒤에 '.bind(this)' 추가(강제로 this값 주입) 2.this.setState() 사용(constructor에서는 필요없음)

//*Subject컴포넌트에서 WEB을 클릭했을 때, 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 function이 호출됨->mode를 welcome으로 바꾸는 'state값 변경'이 일어남->Content컴포넌트의 내용이 바뀜
//책 p111 참고!

//여기부터
//*TOC컴포넌트에서 목록 중 하나를 클릭했을 때, 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 funtion이 호출됨->*mode를 read로, selected_content_id를 전달받은 id값으로 바꾸는 'state값 변경'이 일어남->클릭한 목록에 해당되게 Content컴포넌트의 내용이 바뀜

//Number():숫자로 강제로 바꿔주는 js명령
//data-id속성 사용하지 않고, bind의 두번째 인자 사용해서 할 수도 있음->책 p125

//**상위컴포넌트가 하위컴포넌트로 값을 전달할 때는 'props' 사용 / *하위컴포넌트가 상위컴포넌트의 값을 바꾸고 싶을 때는 '이벤트' 사용

