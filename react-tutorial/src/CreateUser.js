import React,{useContext, useRef} from "react";
import useInputs from "./useInputs";
import {UserDispatch} from './App'


//Context API  를 활용하여 APP.js 에 적혀있던 값을 CreateUser 로 옮겨줌
function CreateUser(){
    const dispatch = useContext(UserDispatch);
    const [form, onChange , reset] = useInputs({
        username: " ",
        email: " ",
      });


      const {username, email} = form;


      const nextId = useRef(4);

      const onCreate =(()=>{
        dispatch ({
          type :"CREATE_USER",
          user: {
            id: nextId.current,
            username,
            email,
          } 
        });
        nextId.current += 1;
        
        //custom hook
        reset();
    
        
      })
    return(
        <div>
            <input 
            name="username" 
            placeholder="계정명"
            onChange={onChange} //값이 변경될 때 onChange 함수 작동 하는 이벤트
            value={username} 
            />
            <input
            name="email" 
            placeholder="이메일"
            onChange={onChange}
            value={email}
            />
            <button onClick={onCreate}>등록</button>
            {/*클릭 할때 onCreate 함수 작동 */}
        </div>
    );
};


// React.memo 사용법(컴포넌트 리렌더링 props 변경될 때만)
export default React.memo(CreateUser);

