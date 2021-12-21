import React, { Component } from 'react'; 

class CreateContent extends Component { //'CreateContent컴포넌트'(create 클릭했을 때, '쓰기'에 사용될 컴포넌트)
    render() {
        return ( 
           <article>
               <h2>Create</h2>
               <form action="/create_process" method="post"
                onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value, e.target.desc.value); //**onSubmit이벤트의 function의 인자로, '<input>태그에 입력한 값과 <textarea>에 입력한 값'을 전달!
                }.bind(this)}>
                    <p> <input type="text" name="title" placeholder="title"></input> </p> {/*name은 데이터의 이름*/}
                    <p> <textarea name="desc" placeholder="description"></textarea> </p>
                    <p> <input type="submit"></input> </p> {/*양식 제출용 버튼, 입력한 값들을 form태그의 action속성의 url로 전송*/}
               </form>
           </article>
        )
    }
}

export default CreateContent;