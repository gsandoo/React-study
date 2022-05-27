import React, { useState , useEffect} from "react";
import axios from "axios";

function AxiosTest(){
    const [users, setUsers] = useState(null)  
    const [error , setError] = useState(null)
    const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setUsers(null);
          // loading 상태를 true 로 바꿉니다.
          const response = await axios.get(
            '/imagefile.json'
          );
          setUsers(response.data);
          console.log(users) // 데이터는 response.data 안에 들어있습니다.
        } catch (e){
          setError(e);
        };
      };
      useEffect(() => {
        fetchUsers();
      }, []);
    
      if (!users) return "안돼";
    return(
        
        <div>
            준비중
            <button onClick={fetchUsers}>이 곳을 누르세여</button>
            {users&&users.map(user=>
                <li key={user.id}>
                  안녕 나는 {user.id} 번
                  url 은 {user.url} 이야
                </li>
            )
            }
        </div>
    );
};

export default AxiosTest;

