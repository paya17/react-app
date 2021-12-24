import React, { Component } from 'react'; 

class UpdateContent extends Component { //'UpdateContent컴포넌트'(update 클릭했을 때, '쓰기'에 사용될 컴포넌트)
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id, //*App컴포넌트의 UpdateContent컴포넌트의 data props로부터 들어온 선택된 콘텐츠의 id,제목,내용!
            title: this.props.data.title,
            desc: this.props.data.desc
        }; //*props는 수정이 안되기 때문에, 수정이 가능한 state화 시켜준다
    }
    render() {
        return ( 
           <article>
               <h2>Update</h2>

               <form action="/create_process" method="post"
                onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit(this.state.id,this.state.title,this.state.desc); //**onSubmit이벤트의 function의 인자로, '폼에서 수정'한 '선택된 콘텐츠의 id,제목,내용'이 전달됨!
                }.bind(this)}>

                    <p> 
                        <input 
                            type="text" 
                            name="title" {/*name은 데이터의 이름*/}
                            placeholder="title" 
                            value={this.state.title} {/* *원래 value속성의 값은 this.props.data.title(App컴포넌트의 UpdateContent컴포넌트의 data props로부터 들어온 '선택된 콘텐츠의 제목')이었음*/}
                            onChange={function(e) {
                                this.setState({title:e.target.value});
                            }.bind(this)} {/* *setState이용해 state값을 변경해야, <input>태그로 들어온 '선택된 콘텐츠의 제목'을 수정할 수 있다*/}
                        ></input> 
                    </p> 
                    <p> 
                        <textarea 
                            name="desc" 
                            placeholder="description"
                            value={this.state.desc} {/* *원래 value속성의 값은 this.props.data.desc(App컴포넌트의 UpdateContent컴포넌트의 data props로부터 들어온 '선택된 콘텐츠의 내용')이었음*/}
                            onChange={function(e) {
                                this.setState({title:e.target.value});
                            }.bind(this)} {/* *setState이용해 state값을 변경해야 <textarea>태그로 들어온 '선택된 콘텐츠의 내용'을 수정할 수 있다*/}
                        ></textarea> 
                    </p>
                    <p> <input type="submit"></input> </p> {/*양식 제출용 버튼, 입력한 값들을 form태그의 action속성의 url로 전송*/}

               </form>
           </article>
        );
    }
}

export default UpdateContent;