import React from 'react';

function Hello({name,color,isSpecial}) {
    return (<div 
                style={{color}}>
                {isSpecial && <b>*</b>}
                {/*조건부 랜더링은 and , or 연산자나 삼항연산자를 사용한다 */}
                안녕하세요 ! {name}
            </div>
            );
}


//defaultProps : 값이 할당되지 않았을 때 기본 값으로 값을 지정해둠.
Hello.defaultProps={
    name: "이름 없음"
};
export default Hello;





