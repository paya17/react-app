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
      mode:'welcome', 
      selected_content_id:2, 
      welcome:{ title:'Welcome', desc:"Hello, React!!"}, 
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"}
      ] 
    }
  }

  getReadContent() { //getReadContent() 만들기 (선택된 콘텐츠 찾아내는 코드)
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i]; 
      if(data.id === this.state.selected_content_id) { 
        return data; //*data를 return
      }
      i = i+1;
    } 
  }

  getContent() { //getContent() 만들기
    var _title, _desc, _article = null; 

    if(this.state.mode === 'welcome') { 

      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

      _article = <ReadContent title={_title} desc={_desc}></ReadContent> 

    } else if(this.state.mode === 'read') { 

      var _content = this.getReadContent(); //수정(this.getReadContent() 넣기)

      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent> //수정

    } else if(this.state.mode === 'create') { 

      _article = <CreateContent onSubmit={function(_title, _desc) { 
          this.max_content_id = this.max_content_id + 1; 
          var _contents = this.state.contents.concat( {id:this.max_content_id, title:_title, desc:_desc} ); 
          this.setState({contents:_contents, mode:'read', selected_content_id:this.max_content_id}); 
      }.bind(this)}></CreateContent> 

    } else if(this.state.mode === 'update') { 

      var _content = this.getReadContent(); //수정(this.getReadContent() 넣기)

      _article = <UpdateContent data={_content} onSubmit={ //data props의 값을 수정
        function(_id,_title, _desc) { 
          var _contents = Array.from(this.state.contents); 
          var i = 0;
          while(i<_contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc}; 
              break;
            }
            i=i+1
          }
          this.setState({contents:_contents, mode:'read'}); 
      }.bind(this)}></UpdateContent> 
    }

    return _article; //*getContent함수에서, '_article'을 return
  }

  render() { //render() 쪼개기->getContent() 만들기 
    return (
      <div className="App"> 
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode:'welcome'}); 
          }.bind(this)}></Subject> 
        <TOC 
          data={this.state.contents}
          onChangePage={function(id) { 
            this.setState({mode:'read', selected_content_id:Number(id)}); 
          }.bind(this)}></TOC>
        <Control onChangeMode={function(_mode) { 
          if(_mode === 'delete') { 
            if(window.confirm('really?')) { 
              var _contents = Array.from(this.state.contents); 
              var i = 0;
              while(i<_contents.length) {
                if(_contents[i].id === this.state.selected_content_id) { 
                  _contents.splice(i,1); 
                  break;
                }
                i=i+1;
              }
              this.setState({contents:_contents, mode:'welcome'}); 
            }

          } else {
            this.setState({mode:_mode}); 
          }  
        }.bind(this)}></Control>

        {this.getContent()} {/* *_article자리에 this.getContent() 넣기*/}
      </div>
    );
  }

}

export default App;


//기존 render코드가 복잡해서, 쪼갠다 -> getContent() 만들기: '_article'을 return -> render()에서, 기존에 있던 _article자리에 this.getContent() 넣기
//'선택된 콘텐츠 찾아내는 코드'가 중복되므로, getReadContent() 만들어서 빼내기:data를 return -> read모드와 update에 있던 선택된 콘텐츠를 찾아내는 코드를 this.getReadContent()로 대체















