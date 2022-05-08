import React,{useRef , useState ,useMemo , useCallback} from 'react';
// import Hello from './Hello';
import './App.css';
// import InputMany from './InputMany';
// import InputSample from './InputSample';
import UserList from './UserList';
// import Wrapper from './wrapper';
// import Counter from './Counter';
import CreateUser from './CreateUser';


//useMemo 훅
function countActiveUsers(users){
  console.log(" 활성 사용자 수를 세는 중...")
  return users.filter(users=> users.active).length;
}




function practiceApp() {

const [inputs, setInputs] = useState({
  username: " ",
  email: " ",
});
const {username, email} = inputs; // 객체 비구조화할당 . useState가 객체이기때문



//useCallback 함수 훅
const onChange = useCallback(e=>{ //input 의 값이 바뀔 때의 onchange 함수
  const {name, value} = e.target; //inputs 값 은 객체. 
  setInputs({
    ...inputs,   // 불변성 지키고
    [name]:value // 이름 값에 따라서 value 값을 부여
  });
},[inputs]);



  const [users,SetUsers]=useState([ //users 값 (배열 안의 객체)
    {
        id:1,
        username: 'kim',
        email: 'kim@naver.com',
        active: true // username 클릭 시 색상을 바꾸고 싶을 때 active 값 추가 (배열 수정)
    },
    {
        id:2,
        username: 'kang',
        email: 'kang@naver.com',
        active: false
    },
    {
        id:3,
        username: 'park',
        email: 'park@naver.com',
        active: false
    }
]);


// useRef 사용법: useRef는 값이 변해도 리랜더링 되지않는다.  definition.md 에서 확인하세요
  const nextId = useRef(4);




  //useCallback 훅
  // 등록 버튼
  const onCreate = useCallback(()=>{ //등록 되고 새로 적을 수 있게 하는 기능
    
    const user ={ //user 는 새로운 값 
      id: nextId.current, //useRef 값 (기본값 4)
      username, //적힌 username 값
      email     // 적힌 이메일 값
    };
    SetUsers(users=>[...users,user]); // 배열에서 spread 연산자 사용하기
                                      // SetUsers 는 등록버튼 누르고 인풋 밑에 보여주는 배열

    // SetUsers(users=>users.concat(user)) > 배열 하나로 합쳐주기 (spread 안쓰면 이렇게도 가능)

    setInputs({ // 버튼 누르고 나서  공백으로 바꿔줘야한다 
      username: ' ',
      email: ' ' 
    });
    console.log(nextId.current)  //4가 찍힌다
    nextId.current+=1;
  },[username, email])





  //useCallback 훅
  const onRemove = useCallback(id => { //삭제 하려는 값의 id 를 받아오기 
    SetUsers(users=>users.filter(user=> user.id !== id)) 
    // filter를 돌며 삭제하려는 값의 id 가 아닌 것만 SetUser 안으로 다시 투입.
  },[{/*users */}]) //React.memo




  
  //useCallback 훅
  // 이 함수는 username 누르면 색상 바뀌게 하는 함수
  const onToggle =useCallback (id =>{ // 클릭한 값의 id 를 받아오기
    SetUsers(users=>users.map(   //users 배열 매핑
    //SetUsers 의 파라미터로 최신 users 를 받아옴 (React.memo)

      user=> user.id === id  // user 파라미터 id 가 같을 시
      ?{...user,active: !user.active} //색상 반전
      : user
    ))
  },[]) // React.memo 시 deps 안 users 는 빼고 SetUsers 안에
                   // users 를 넣음 으로써 deps 값을 참조 하지 않게 됨.
  



  //useMemo
  const count = useMemo(()=>countActiveUsers(users),[users])
  
  
  
  return (
    // <Wrapper> 
    //   <Hello name='react' color="red" isSpecial={true}/>
    //   <Hello  color="pink"/>
    // </Wrapper>
    

    //카운터함수
    // <Counter />

    //인풋하나
    // <InputSample/>

    //인풋여러개
    // <InputMany/>




    //CreateUser
      <>
        <CreateUser // 안에서 사용하는 username은 App.js 에서 정의 username 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> {/*users 값 참조 */}
        <div>활성 사용자 수 : {count}</div>
      </>   
  )
}


export default App;


