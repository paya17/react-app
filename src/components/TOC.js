//TOC컴포넌트 만들기
import React, { Component } from 'react'; 

class TOC extends Component { 
    render() {
        return ( //TOC컴포넌트의 내용
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>           
        )
    }
}

export default TOC;