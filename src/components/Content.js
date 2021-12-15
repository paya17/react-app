//Content컴포넌트 만들기
import React, { Component } from 'react'; 

class Content extends Component { 
    render() {
        return ( //Content컴포넌트의 내용
           <article>
               <h2>HTML</h2>
               HTML is HyperText Markup Language.
           </article>
        )
    }
}

export default Content;