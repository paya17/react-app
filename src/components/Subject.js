//**만들고 싶은 코드를, (별도의 파일에 있는) 여러 개의 컴포넌트들로 정리정돈(분리)한 후, App.js에 이 컴포넌트들을 import한 후 App컴포넌트에 주입

//Subject컴포넌트 만들기
import React, { Component } from 'react'; //Component클래스를 사용하기 위해

class Subject extends Component { 
    render() {
        return ( //Subject컴포넌트의 내용
            <header>
                <h1>WEB</h1>
                world wide web!
            </header>
        )
    }
}

export default Subject; //외부에서 사용할 수 있게


//컴포넌트 만들 때, 컴포넌트 이름은 대문자로 시작해야 하고, 컴포넌트에는 반드시 render함수가 있어야 한다
//컴포넌트는 정리정돈의 도구