import React, { Component } from 'react'; 

class TOC extends Component { //'TOC컴포넌트'
    render() {
        var lists = []; 
        var data = this.props.data; 
        var i=0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i=i+1;
        } 

        return ( 
            <nav>
                <ul>
                    {lists}
                    {/*원래는 <li><a href="1.html">HTML</a></li>
                       <li><a href="2.html">CSS</a></li>
                       <li><a href="3.html">JavaScript</a></li>*/}
                </ul>
            </nav>           
        )
    }
}

export default TOC;