import React from "react";
import WithRouterSample from "./withRouterSample";


const profileData = {
    gsandoo:{
        name: '강산아',
        description: 'FrontEnd Engineer'
    },
    homer:{
        name :"호머 심슨",
        description: "심슨 가족에 나오는 아빠 역할 캐릭터"
    }
}

//URL 파라미터 사용법 match 사용
function Profile({match}){
    const {username} = match.params; // 여기서 username 은 App.js Route 컴포넌트에서 props 로 받아온 값.
    console.log(match) 
    console.log(username); //gsandoo , homer
    const profile  = profileData[username]

    if (!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
        
    );
};

export default Profile;

