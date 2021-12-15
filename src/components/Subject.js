import React, { Component } from 'react'; 

class Subject extends Component { //'Subject컴포넌트'
    render() {
        return ( 
            <header>
                <h1>{this.props.title}</h1> {/*App.js에서 Subject컴포넌트에 속성(props)을 붙인 후에, 이 부분을 바꿈*/}
                {this.props.sub}
            </header>
        )
    }
}

export default Subject; 


