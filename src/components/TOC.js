import React, { Component } from 'react'; 

class TOC extends Component { //'TOC컴포넌트'
    shouldComponentUpdate(newProps, newState) {
        if(this.props.data === newProps.data) { //concat()이 아닌 push()를 사용했다면, 둘이 똑같았을 것
            return false;
        }
        return true;
    } //*shouldComponentUpdate()를 이용해, TOC컴포넌트로 들어오는 props값이 바뀌면 render함수가 호출되고, 값이 안바뀌면 render함수가 호출되지 않도록

    render() {
        var lists = []; 
        var data = this.props.data; 
        var i=0;
        while(i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id} //'data-'id속성 추가
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id); //*onChangePage이벤트의 function의 인자로, 클릭한 목록의 id값을 전달!
                        }.bind(this)}>{data[i].title}</a>
                </li>); //목록을 클릭했을 때
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


//*html에서, data-속성명='속성값'으로 속성값 저장하기 / js에서, dataset.속성명으로 속성값 가져오기
//e.target.'dataset.id' -> <a>태그에 지정해둔 data-id에 접근