import React, {useContext , useEffect} from "react";
import { UserDispatch } from "./App";


//배열을 랜더링을 하는 법
//컴포넌트를 하나 더 생성 해주기

// 배열을 랜더링 할 땐 키값이 있어야 한다.




// React.memo 사용법(컴포넌트 리렌더링 props 변경될 때만)


const User = React.memo(function User({user /*, onRemove , onToggle*/  }){ //컴포넌트를 하나 더 생성 해주기
    // 이 컴포넌트는 App.js 에서 값을 받아와서 형태를 보여주는 컴포넌트
    // 패러미터는(매개변수)는 들어오는 값에 따라 다른 결과를 호출하기위해 사용된다.
   
    //useEffect 훅 사용법
    useEffect(()=>{
        console.log("user 값이 설정 됌") //기본적으로 마운트 될 떄 실행되는 함수
        console.log(user);
    return()=>{
        console.log("user 값이 바뀌기 전") //deps 가 비어있다면 삭제될 때 만 실행
        console.log(user)                 // deps 안에 users 배열이 들어있으니 업데이트 , 삭제 될 떄 사용된다.
    }},[user])
  
    
    
    const {username, email , id , active} = user; //객체 비구조화 
    
    //Context API
    const dispatch  = useContext(UserDispatch)

    //Toggle 방식과 Remove 방식 차이 확인 필요
    const onToggle =(()=>{
        dispatch({
          type :"TOGGLE_USER",
          id
        })
      })


    return(                  // 반환
    <div>
        <b style={{
            color: active ?'green' :'black',
            cursor: 'pointer'
        }}
        onClick ={()=>onToggle(id)}
        >
            {username}
        </b>
        &nbsp; {/* username 과 email 사이 공백 */}
        &nbsp; {/* username 과 email 사이 공백 */}

        <span>({email})</span>
        <button onClick={()=> /*onRemove(id)*/dispatch({
            type: "REMOVE_USER",
            id
        })}>삭제</button>
        {/* 이벤트 에 함수 넣을땐 무조건 함수실행시키는 함수만들기 */}
    </div>
    )// 반복되는 형식을 컴포넌트로 묶어 만들기
});

function UserList({users  /*, onRemove , onToggle*/}){
    // 이 컴포넌트는 App.js 로 부터 받아온 값을 
    // User 컴포넌트와 연결하고 리턴해주는 컴포넌트


//       const users=[
//     {
//         id:1,
//         username: 'kim',
//         email: 'kim@naver.com'
//     },
//     {
//         id:2,
//         username: 'kang',
//         email: 'kang@naver.com'
//     },
//     {
//         id:3,
//         username: 'park',
//         email: 'park@naver.com'
//     }
// ];
        return(
        // <div>
        //     <User user={users[0]}/>     {/*User 컴포넌트 호출 */}
        //     <User user={users[1]}/>
        //     <User user={users[2]}/>
        // </div>
        



        // 객체안의 정보가 규칙적이지 않을 떄: map 함수 활용

        // const array = [1,2,3,4,5,6,7,8]
        // const square = n=> n*n
        // const squared = array.map(square)

        <div>
            {
                users.map( //users 배열 (App.js에 있음)을 map
                    user=> (
                    <User 
                        user={user} 
                        key={user.id} 
                        // onRemove={onRemove}
                        // onToggle={onToggle}
                    />)
                ) //user라는 파라미터는 User 컴포넌트 user파라미터다
            }
        </div>
        );};



// React.memo 사용법(컴포넌트 리렌더링 props 변경될 때만)
export default React.memo(UserList , (prevProps ,nextProps)=>nextProps.users === prevProps.users);

