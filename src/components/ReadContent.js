import React, { Component } from 'react'; 

class ReadContent extends Component { //'ReadContent컴포넌트'(Content컴포넌트가 이걸로 바뀜)('읽기'에 사용되는 컴포넌트)
    render() {
        return ( 
           <article>
               <h2>{this.props.title}</h2>
               {this.props.desc}
           </article>
        )
    }
}

export default ReadContent;