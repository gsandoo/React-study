import React, { useState } from "react";
import axios from "axios";

function AxiosTest(){
    const [users, setUsers] = useState("")
    
    const dataFetch = async()=>{ 
        setUsers(null);
        const response = await axios.get('/imagefile.json')
        console.log("작업중...")
        setUsers(response.data);
    }
    return(
        
        <div>
            준비중
            <button onClick={dataFetch}>이 곳을 누르세여</button>
            {users.id}
        </div>
    );
};

export default AxiosTest;

