
import React, { Component } from 'react'; 

class UpdateContent extends Component { //'UpdateContent컴포넌트'(update 클릭했을 때, '쓰기'에 사용될 컴포넌트)
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id, 
            title: this.props.data.title,
            desc: this.props.data.desc
        }; 

        this.inputFormHandler = this.inputFormHandler.bind(this); //bind(this) 붙여준 것으로 교체(constructor 안에 작성!)
    }

    inputFormHandler(e) { //inputFormHandler() 만들기 (return값이 없음)
        this.setState({[e.target.name]:e.target.value}); //*대괄호([])를 사용하면, 객체에서 대괄호 안의 값을 '프로퍼티'로 사용할 수 있다(js 최신문법)
    }

    render() {
        return ( 
           <article>
               <h2>Update</h2>

               <form action="/create_process" method="post"
                onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit(this.state.id,this.state.title,this.state.desc);  
                }.bind(this)}>

                    <p> 
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="title" 
                            value={this.state.title} 
                            onChange={this.inputFormHandler} //this.inputFormHandler로 수정
                        ></input> 
                    </p> 
                    <p> 
                        <textarea 
                            name="desc" 
                            placeholder="description"
                            value={this.state.desc} 
                            onChange={this.inputFormHandler} //this.inputFormHandler로 수정
                        ></textarea> 
                    </p>
                    <p> <input type="submit"></input> </p> 

               </form>
           </article>
        );
    }
}

export default UpdateContent;

//*이곳에 있는 HTML처럼 생긴 코드는, 진짜 HTML이 아니다!->리액트 HTML이므로, 리액트의 방법을 따라야 함
//<input>마다 onChange다음에 있는 것을 중복적으로 만들기 귀찮으므로, inputFormHandler() 만들어서 빼내기 -> constructor 안에, bind(this) 붙여준 것으로 교체 -> onChange다음에 있는 자리를 this.inputFormHandler로 바꾸기