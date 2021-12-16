import React, { Component } from 'react'; 

class Subject extends Component { //'Subject컴포넌트'
    render() {
        return ( 
            <header>
                <h1>{this.props.title}</h1> {/*'props'*/}
                {this.props.sub}
            </header>
        )
    }
}

export default Subject; 


