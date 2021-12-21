import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; 
import TOC from './components/TOC';
import Control from './components/Control'; 
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
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
    var _title, _desc, _article = null; //*_article변수 추가 선언
    if(this.state.mode === 'welcome') { //<mode가 welcome일 때>
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent> //*_article변수에 ReadContent를
    } else if(this.state.mode === 'read') { //<mode가 read일 때>
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break; 
        }
        i = i+1;
      } 
      _article = <ReadContent title={_title} desc={_desc}></ReadContent> //*_article변수에 ReadContent를
    } else if(this.state.mode === 'create') { //<mode가 create일 때>
      _article = <CreateContent onSubmit={function(_title, _desc) { //*인자로 '<input>태그에 입력한 값과 <textarea>에 입력한 값'을 전달받음
          //App컴포넌트의 state.contents 끝에 입력한 값들을 추가하는 코드가 들어감
      }.bind(this)}></CreateContent> //*mode가 create일 때, _article변수에 ReadContent 말고 CreateContent를
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
        <Control onChangeMode={function(_mode) { {/*인자로 mode이름을 전달받음*/}
          this.setState({mode:_mode}); {/*mode를 인자로 전달받은 mode이름으로 'state 변경'*/}
        }.bind(this)}></Control>

        {_article} {/*원래는 <ReadContent title={_title} desc={_desc}></ReadContent>*/} {/*주의*/}
      </div>
    );
  }

}

export default App;




//Subject컴포넌트의 WEB이나 TOC컴포넌트의 목록을 '클릭'(event)했을 때->각 부분에 맞게 ReadContent컴포넌트의 내용이 달라지도록 (**App컴포넌트의 'state'를 바꾸는 것을 통해)
//*event발생 -> App컴포넌트에서, state 바뀜->하위컴포넌트들의 props 바뀜 -> 하위컴포넌트에서, 바뀐 props (위와 비슷한 얘기)(화면이 다시 그려진다)
//**state값 바뀌면->그 state를 가지고 있는 App컴포넌트의 'render함수'가 다시 호출됨->하위컴포넌트들의 'render함수'도 함께 호출됨 (화면이 다시 그려진다)
//**'event발생하면->state값 바뀌도록'해서 역동성(화면이 다시 그려짐) 부여!
//*Subject컴포넌트에서 WEB을 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 function이 호출됨-> mode를 welcome으로 바꾸는 'state값 변경'이 일어남-> ReadContent컴포넌트의 내용이 바뀜
//*TOC컴포넌트에서 목록 중 하나를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangePage이벤트'의 funtion이 호출됨-> *mode를 read로, selected_content_id를 전달받은 id값으로 바꾸는 'state값 변경'이 일어남-> 클릭한 목록에 해당되게 ReadContent컴포넌트의 내용이 바뀜
//**상위컴포넌트가 하위컴포넌트로 값을 전달할 때는 'props' 사용 / *하위컴포넌트가 상위컴포넌트의 값을 바꾸고 싶을 때는 '이벤트' 사용

//**'id'를 부여
//컴포넌트 만들고->App.js에 import하고->App.js에서 만든 컴포넌트 사용
//*create,update,delete를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangeMode이벤트'의 funtion이 호출됨-> mode를 인자로 전달받은 mode이름(create,update,delete)으로 바꾸는 'state값 변경'이 일어남

//여기부터
//원래의 Content컴포넌트를 ReadContent컴포넌트로 바꾸고, CreateContent컴포넌트를 만든다(안에 form 만들기)
//*_article변수 선언
//*mode가 create일 때, _article변수에 ReadContent 말고 CreateContent를

//*Create컴포넌트에서 <input>태그와 <textarea>태그에 '입력한 값들'을, App컴포넌트의 state.contents 끝에 추가하고 싶다
/*
create를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 (Control컴포넌트의) 'onChangeMode이벤트'의 function이 호출됨-> mode를, 인자로 전달받은 mode이름인 create로 바꾸는 'state값 변경'이 일어남
->바뀐 create모드에서, <input>태그와 <textarea>태그에 값을 입력해서 제출하면 'onSubmit'이벤트가 발생해서 App컴포넌트에 있는 (CreateContent컴포넌트의) 'onSubmit이벤트'의 function이 호출되고 인자로 <input>태그와 <textarea>태그에 '입력한 값들'을 전달받음
-> (계속됨)App컴포넌트의 state.contents 끝에 '입력한 값들'이 추가되고, TOC컴포넌트의 목록에도 나타남...
*/