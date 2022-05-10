import React from "react";
import WithRouterSample from "./WithRouterSample";


const profileData = { // 데이터 객체를 하나 생성해준다.
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
    const {username} = match.params; // 여기서 username 은 Profiles.js Route 컴포넌트에서 props 로 받아온 값.
    console.log(match) // 현재 페이지 내 정보
    console.log(username); //gsandoo , homer
    const profile  = profileData[username] // 객체 내 원소 정보를 불러온다.
    console.log(profile) //name 과 description


    if (!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample/> 
            {/* 라우트 될 때 match.params 는 라우팅되는 컴포넌트의 match 값을 가져온다. */}
        </div>
        
    );
};

export default Profile;

