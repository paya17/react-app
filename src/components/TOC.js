import React, { Component } from 'react'; 

class TOC extends Component { //'TOC컴포넌트'
    render() {
        var lists = []; //대괄호는 배열
        var data = this.props.data; //'props'
        var i=0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i=i+1;
        } //여러개의 항목으로 구성된 목록을 자동으로 생성할 때는, 각 항목에 'key'를 지정해야 한다

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