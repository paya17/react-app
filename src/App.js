import React, { Component } from 'react';
import logo from './logo.svg';
import Subject from './components/Subject'; 
import TOC from './components/TOC';
import Control from './components/Control'; 
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css'; 

class App extends Component { //'App컴포넌트'

  constructor(props) { 
    super(props)
    this.max_content_id = 3;
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
    var _title, _desc, _article = null; //_article변수 추가 선언

    if(this.state.mode === 'welcome') { //<mode가 welcome일 때>

      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

      _article = <ReadContent title={_title} desc={_desc}></ReadContent> //_article변수에 ReadContent를

    } else if(this.state.mode === 'read') { //<mode가 read일 때>

      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i]; //*contents[i]->선택될지 모르는 컨텐츠들(HTML,CSS,JS목록에서) 중 하나
        if(data.id === this.state.selected_content_id) { //*선택된 콘텐츠 가려내기
          _title = data.title;
          _desc = data.desc;
          break; 
        }
        i = i+1;
      } 

      _article = <ReadContent title={_title} desc={_desc}></ReadContent> //_article변수에 ReadContent를

    } else if(this.state.mode === 'create') { //<mode가 create일 때>

      _article = <CreateContent onSubmit={function(_title, _desc) { //*인자로 '<input>태그에 입력한 값과 <textarea>에 입력한 값'을 전달받음
          this.max_content_id = this.max_content_id + 1; //this.max_content_id값을 1 증가시킴
          var _contents = this.state.contents.concat( {id:this.max_content_id, title:_title, desc:_desc} ); //concat()을 이용해, App컴포넌트의 state.contents의 원본을 복사한 복사본의 끝에 '입력한 값들'과 id를 추가
          this.setState({contents:_contents, mode:'read', selected_content_id:this.max_content_id}); //contents를, 입력한 값이 추가된 _contents로 'state 변경'!
      }.bind(this)}></CreateContent> //mode가 create일 때, _article변수에 ReadContent 말고 CreateContent를

    } else if(this.state.mode === 'update') { //<mode가 update일 때>

      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _data = data; //*_data는 선택된 콘텐츠
        }
        i = i+1;
      } //*selected_content_id를 이용해, 선택된 콘텐츠(HTML,CSS,JS목록에서)를 찾는다(read모드에서 했던 작업!)

      _article = <UpdateContent data={_data} onSubmit={ //*선택된 콘텐츠(_data)를 data props로 주입!
        function(_id,_title, _desc) { //*인자로 '폼에서 수정된, 선택된 콘텐츠의 id,제목,내용'을 전달받음 
          var _contents = Array.from(this.state.contents); //*this.state.contents를 '복사'한 후, _contents변수에 저장
          var i = 0;
          while(i<_contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc}; //_contents는 기존의 콘텐츠가 아닌 수정된 콘텐츠가 포함된 것
              break;
            }
            i=i+1
          }
          this.setState({contents:_contents, mode:read}); //*setState이용해 'state 변경'
      }.bind(this)}></UpdateContent> //_article변수에 UpdateContent를
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
//##Subject컴포넌트에서 WEB을 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 Subject컴포넌트의 'onChangePage이벤트'의 function이 호출됨-> mode를 welcome으로 바꾸는 'state값 변경'이 일어남->render함수 호출돼서, ReadContent컴포넌트의 내용이 바뀜
//##TOC컴포넌트에서 목록 중 하나를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 TOC컴포넌트의 'onChangePage이벤트'의 funtion이 호출됨-> *mode를 read로, selected_content_id를 전달받은 id값으로 바꾸는 'state값 변경'이 일어남->render함수 호출돼서, 클릭한 목록에 해당되게 ReadContent컴포넌트의 내용이 바뀜
//**상위컴포넌트가 하위컴포넌트로 값을 전달할 때는 'props' 사용 / *하위컴포넌트가 상위컴포넌트의 값을 바꾸고 싶을 때는 '이벤트' 사용

//**'id'를 부여
//컴포넌트 만들고->App.js에 import하고->App.js에서 만든 컴포넌트 사용
//*create,update,delete를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 'onChangeMode이벤트'의 funtion이 호출됨-> mode를 인자로 전달받은 mode이름(create,update,delete)으로 바꾸는 'state값 변경'이 일어남

//원래의 Content컴포넌트를 ReadContent컴포넌트로 바꾸고, CreateContent컴포넌트를 만든다(안에 form 만들기)
//*_article변수 선언->가변성(변할 수 있는)을 주기 위해!
//*mode가 create일 때, _article변수에 ReadContent 말고 CreateContent를
//*인자->값을 넘겨줌!

//*Create컴포넌트에서 <input>태그와 <textarea>태그에 '입력한 값들'을, App컴포넌트의 state.contents 끝에 추가하고 싶다
/*
##Control컴포넌트에서 create를 클릭했을 때-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 Control컴포넌트의 'onChangeMode이벤트'의 function이 호출됨-> mode를, '인자'로 전달받은 mode이름인 create로 바꾸는 'state값 변경'이 일어남->render함수 호출됨
VV->바뀐 create모드에서(CreateContent컴포넌트에서), <input>태그와 <textarea>태그에 값을 입력해서 제출하면 'onSubmit'이벤트가 발생해서 App컴포넌트에 있는 CreateContent컴포넌트의 'onSubmit이벤트'의 function이 호출되고 '인자'로 <input>태그와 <textarea>태그에 '입력한 값들'을 전달받음
-> concat()을 이용해, App컴포넌트의 state.contents의 원본을 복사한 복사본의 끝에 '입력한 값들'과 id가 추가됨-> *contents를, 입력한 값이 추가된 _contents로 / mode를 read로 /selected_content_id를 this.max_content_id로 'state 변경'
-> render함수 호출됨(shouldComponentUpdate()를 이용해, TOC컴포넌트로 들어오는 props값이 바뀌면 render함수가 호출되고, 값이 안바뀌면 render함수가 호출되지 않도록)-> TOC컴포넌트의 목록에 추가됨
*/
  
//*push():원본을 변경 / concat():원본을 변경하지 않고, 원본의 '복사본'을 변경 ->state에 값을 추가할 때, push()말고 concat() 사용하기!(shouldComponentUpdate()때문)
//**state에 있는 값을 바꿀 때는, 원본을 수정하지 말고 '복사본'을 수정하자!
//shouldComponentUpdate():어떤 컴포넌트의 render함수가 실행되어야하는지 않아야하는지 결정해줌->render함수 이전에 실행됨, return값이 true면 render함수가 호출되고, false면 render함수가 호출되지 않는다, 두 개의 매개변수 newProps,newState
/*
concat()이외에 원본의 불변성을 유지하는 방법 
1.배열의 경우->'Array.from()'으로 원본을 복사한 후, push() 사용해 변경
2.객체의 경우->'Object.assign()'으로 원본을 복사
3.'immutable.js' 사용(모든 명령어가 불변함)
*/

//여기부터
//Update->Read+Create
/*
## HTML,CSS,JS목록에서(TOC컴포넌트에서) update할 콘텐츠를 하나 선택한다(누른다)-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 TOC컴포넌트의 'onChangePage이벤트'의 funtion이 호출됨-> *mode를 read로, 'selected_content_id'를 전달받은 id값으로 바꾸는 'state값 변경'이 일어남->render함수 호출돼서, 클릭한 목록에 해당되게 ReadContent컴포넌트의 내용이 바뀜(위의 내용과 같음)
VV-> Control컴포넌트에서 update를 클릭한다-> 'onClick이벤트'가 발생해서 App컴포넌트에 있는 Control컴포넌트의 'onChangeMode이벤트'의 function이 호출됨-> mode를, '인자'로 전달받은 mode이름인 update로 바꾸는 'state값 변경'이 일어남->render함수 호출됨
->App컴포넌트의 update모드에서 앞에서 선택된 콘텐츠를 찾아 UpdateContent컴포넌트의 data props로 전달한다-> 바뀐 update모드에서(UpdateContent컴포넌트에서), 폼으로 들어온 선택된 콘텐츠의 제목과 내용(this.props.data.title/desc)을 수정해서 제출버튼을 누른다-> 'onSubmit'이벤트가 발생해서 App컴포넌트에 있는 UpdateContent컴포넌트의 'onSubmit이벤트'의 function이 호출되고 인자로 '폼에서 수정된, 선택된 콘텐츠의 id,제목,내용'을 전달받음
-> 기존의 콘텐츠를 수정된 콘텐츠로 / mode를 read로 'state 변경'-> render함수 호출됨-> TOC컴포넌트의 목록이 수정됨
*/
//배열,객체를 '수정'하려고 할 때는, 일단 복사한 다음 복사본을 수정한다
