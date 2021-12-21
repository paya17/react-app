import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; 
import TOC from './components/TOC';
import Control from './components/Control'; //App.js에 Control컴포넌트를 로드
import Content from './components/Content';
import './App.css'; 

class App extends Component { //'App컴포넌트'

  constructor(props) { 
    super(props)
    this.state = {  
      subject:{title:"WEB" , sub:"world wide web!"}, 
      mode:'read', 
      selected_content_id:2, 
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
    if(this.state.mode === 'welcome') { //mode에 따라서, 'Content컴포넌트 내용이 달라지도록'  //mode가 welcome일 때
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') { //mode가 read일 때
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break; //while문 빠져나감
        }
        i = i+1;
      } //반복문 사용
    }

    return (
      <div className="App"> 
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode:'welcome'}); {/*mode를 welcome으로 'state 변경'*/}
          }.bind(this)}></Subject> 
        <TOC 
          data={this.state.contents}
          onChangePage={function(id) { {/*인자로 id값 전달받음*/}
            this.setState({mode:'read', selected_content_id:Number(id)}); {/*mode를 read로, selected_content_id를 전달받은 id값으로 'state 변경'*/}
          }.bind(this)}></TOC>
        <Control onChangeMode={function(_mode) { {/* *인자로 mode이름을 전달받음*/}
          this.setState({mode:_mode}); {/* *mode를 인자로 전달받은 mode이름으로 'state 변경'*/}
        }.bind(this)}></Control>
        <Content title={_title} desc={_desc}></Content> 
      </div>
    );
  }

}

export default App;




//Subject컴포넌트의 WEB이나 TOC컴포넌트의 목록을 '클릭'(event)했을 때->각 부분에 맞게 Content컴포넌트의 내용이 달라지도록 (**App컴포넌트의 'state'를 바꾸는 것을 통해)
//*event발생 -> App컴포넌트에서, state 바뀜->하위컴포넌트들의 props 바뀜 -> 하위컴포넌트에서, 바뀐 props (위와 비슷한 얘기)(화면이 다시 그려진다)
//**state값 바뀌면->그 state를 가지고 있는 App컴포넌트의 'render함수'가 다시 호출됨->하위컴포넌트들의 'render함수'도 함께 호출됨 (화면이 다시 그려진다)
//**'event발생하면->state값 바뀌도록'해서 역동성(화면이 다시 그려짐) 부여!
//*Subject컴포넌트에서 WEB을 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 function이 호출됨-> mode를 welcome으로 바꾸는 'state값 변경'이 일어남-> Content컴포넌트의 내용이 바뀜
//*TOC컴포넌트에서 목록 중 하나를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 funtion이 호출됨-> *mode를 read로, selected_content_id를 전달받은 id값으로 바꾸는 'state값 변경'이 일어남-> 클릭한 목록에 해당되게 Content컴포넌트의 내용이 바뀜
//**상위컴포넌트가 하위컴포넌트로 값을 전달할 때는 'props' 사용 / *하위컴포넌트가 상위컴포넌트의 값을 바꾸고 싶을 때는 '이벤트' 사용

//여기부터
//**'id'를 부여
//컴포넌트 만들고->App.js에 import하고->App.js에서 만든 컴포넌트 사용
//*create,update,delete를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangeModee이벤트'의 funtion이 호출됨-> mode를 인자로 전달받은 mode이름(create,update,delete)으로 바꾸는 'state값 변경'이 일어남-> Content컴포넌트의 내용이 바뀜
