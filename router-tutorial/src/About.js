import React from "react";
import qs from 'qs';

function About({location}){
    const query = qs.parse(location.search , { //파싱 => 값을 추출함
        ignoreQueryPrefix: true
    });
    console.log(query)
    const detail = query.detail === 'true' //문자열로 인식하기 때문에  ' ' 해줘야한다.
    return(
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해보는 페이지 입니다.
                {detail && <p>detail 값이 true 입니다!</p>}
            </p>
        </div>
    );
}

export default About;

