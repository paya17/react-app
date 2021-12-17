import React, { Component } from 'react'; 

class Subject extends Component { //'Subject컴포넌트'
    render() {
        return ( 
            <header>
                <h1><a href="/" onClick={function(e) { //<a>태그에, onClick이벤트
                    e.preventDefault();
                    this.props.onChangePage(); //*onChangePage이벤트의 function을 호출하기!
                }.bind(this)}>{this.props.title}</a></h1> {/*WEB 클릭했을 때*/}
                {this.props.sub}
            </header>
        )
    }
}

export default Subject; 


