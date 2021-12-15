import React, { Component } from 'react'; 

class Content extends Component { //'Content컴포넌트'
    render() {
        return ( 
           <article>
               <h2>{this.props.title}</h2>
               {this.props.desc}
           </article>
        )
    }
}

export default Content;