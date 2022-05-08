import React,{ useReducer ,useMemo  , createContext} from 'react';
// import Hello from './Hello';
import './App.css';
// import InputMany from './InputMany';
// import InputSample from './InputSample';
import UserList from './UserList';
// import Wrapper from './wrapper';
// import Counter from './Counter';
import CreateUser from './CreateUser';
// import useInputs from './useInputs';


//useMemo 훅
function countActiveUsers(users){
  console.log(" 활성 사용자 수를 세는 중...")
  return users.filter(users=> users.active).length;
}

//useReducer 사용법

// 1.초기 상태를 만들어준다.
const initialState = {
  
  //custom hook

  // inputs:{
  //   username: " ",
  //   email: " "
  // },
  
  users:[ //users 값 (배열 안의 객체)
  {
      id:1,
      username: 'kim',
      email: 'kim@naver.com',
      active: true, // username 클릭 시 색상을 바꾸고 싶을 때 active 값 추가 (배열 수정)
  },
  {
      id:2,
      username: 'kang',
      email: 'kang@naver.com',
      active: false,
  },
  {
      id:3,
      username: 'park',
      email: 'park@naver.com',
      active: false,
  }
]  
};


//2. reducer 함수 
function reducer (state , action) {
  switch (action.type){


    //custom hook 으로 인해 생략

    // case "CHANGE_INPUT": // onChange 
    //   return {
    //     ...state,    // 현재 상태(initialState) 가져오기 (불변성)
    //     inputs: {    //inputs 값 덮어씌우기
    //       ...state.inputs,   // 현재 상태의 inputs (불변성)
    //       [action.name]: action.value  //name 값에 따라 value 부여
    //   }      
    // };

    case "CREATE_USER": // onCreate
      return {
        inputs: initialState.inputs, // 초기값(빈 값)
        users: state.users.concat(action.user) // users배열에 새 값 추가
      };
    case "TOGGLE_USER": //onToggle
      return {
        ...state, //기존의 상태 불러오기 , 불변성
        users: state.users.map(user=> //매핑
          user.id === action.id
          ? {...user , active: !user.active} //값이 맞다면 active 값 반전
          : user //값이 아니면 그대로 반환
        )
      };
      case "REMOVE_USER": //onRemove
        return {
          ...state, // 불변성
          users: state.users.filter(user=> user.id !== action.id) // 필터는 새롭게 배열 생성
        }  // users 객체를 다 도는데 삭제 버튼 누르지 않는 것만 그대로 users 배열안에 남겨두기 
    default:
      throw new Error ("Unhandled action");
  }
}



export const UserDispatch= createContext(null)

function App() {
  const [state ,dispatch] =useReducer(reducer,initialState);
  //custom hook
  // const [form, onChange , reset] = useInputs({
  //   username: " ",
  //   email: " ",
  // });
  // const {username, email} = form;


  const { users } =state;
  // const nextId = useRef(4);


  //custom hook 으로 인해 생략

  // const {username, email} = state.inputs;  

  // const onChange = useCallback(e => {
  //   const { name , value } = e.target;
  //   dispatch ({
  //     type : "CHANGE_INPUT",
  //     name,
  //     value
  //   })
  // } , [])

  // const onCreate = useCallback (()=>{
  //   dispatch ({
  //     type :"CREATE_USER",
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email,
  //     } 
  //   });
  //   nextId.current += 1;
    
  //   //custom hook
  //   reset();

    
  // },[username, email, reset])

  // const onToggle = useCallback(id=>{
  //   dispatch({
  //     type :"TOGGLE_USER",
  //     id
  //   })
  // } , [])

  // const onRemove = useCallback(id=>{
  //   dispatch({
  //     type: "REMOVE_USER",
  //     id
  //   });
  // } , []);


  const count = useMemo(()=> countActiveUsers(users),[users])

  return (   
    //CreateUser
      <UserDispatch.Provider value ={dispatch}>
        <CreateUser // 안에서 사용하는 username은 App.js 에서 정의 username 
        //  username={username}
        //  email={email}
        //  onChange={onChange}
        //  onCreate={onCreate}
        />
        <UserList 
        users={users} 
        // onToggle={onToggle}
        // onRemove={onRemove}
        /> 
        {/*users 값 참조 */}
        <div>활성 사용자 수 : {count}</div>
      </UserDispatch.Provider>
      
  )
}


export default App;
