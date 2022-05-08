import React,{useState} from "react";


// 인풋값이 여러개 일 땐, useState를 객체화 해서 사용.

function InputMany(){
const [inputs,setInputs] = useState({ 
    name: '',
    nickname: ''    
})//useState 객체화 


// 객체 내 특정 정보 사용하기 쉽게 비구조화 할당

const {name,nickname} = inputs; //이건 value 값
//console.log(name); //<< 이해안되면 확인해보세요
//console.log(nickname)




//onChange 이벤트는 변화가 일어날 때 생기는 이벤트
const onChange = (e)=>{ //e 는 변한 값
    const {name,value} =e.target;
    
    // e.target(input 값 , 여러정보가 있으니 객체) 안에는 name, value 가  
    // 설정되어있으니 미리 객체 비구조화 할당으로 정보를 빼옴 
    
    
    setInputs({    //변하는 값은 기존 값이 객체였으니 기존 값을 불러와야한다.
        ...inputs,
        [name]:value    // 객체상태를 변화할 때: 불변성을 지킨다
                        // name 이 name 이나 nicname에 따라 값이 옮겨짐
    })
    
};
const onReset=()=>{
    setInputs({
        name: '',
        nickname: ''
    })
};

return(
    <div>
        <input 
        name="name"  
        placeholder="이름" 
        onChange={onChange}
        value= {name}
            />
        <input name="nickname" 
        placeholder="닉네임" 
        onChange={onChange} 
        value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값:</b>
            {name} / {nickname}
        </div>
    </div>
);
};

export default InputMany;

