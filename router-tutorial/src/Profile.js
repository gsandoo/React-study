import React from "react";


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
function Profile({match}){
    const {username} = match.params;
    console.log(match.params)
    console.log(username);
    const profile  = profileData[username]

    if (!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            {username} ({profile.name})
            <h3>{profile.description}</h3>
        </div>
        
    );
};

export default Profile;

