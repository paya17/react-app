import React, { Component } from 'react'; 

class Control extends Component { //'Control컴포넌트' (create,update,delete목록을 생성)
    render() {
        return ( 
            <ul>
                <li><a href="/create" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('create'); //*onChangeMode이벤트의 function의 인자로, mode이름을 전달!
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><input type="button" value="delete" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}></input></li> 
            </ul>
        );
    }
}

export default Control; 
