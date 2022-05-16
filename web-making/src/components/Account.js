import React from "react";
import Header from "./Header";
import {Link} from 'react-router-dom';
function Account(){
    return(
        <div id="account">
            <Header/>
            <Link to='/'> <div id="nav_image"><img src="http://ecudemo233855.cafe24.com/_dbook/img/sub_title_bg.jpg" alt="nav_image"/></div></Link>
            <div id="direction">
                <Link to={'/'}> <div className="home">홈</div></Link>
                <div className="arrow">&#62;</div>
                <div className="mypage">로그인</div>
            </div>
            <form id="account_main">
                <button id="login">로그인</button>
                <div id="member_nomember">
                   <button className="member">회원 로그인</button>
                   <button className="nomember">비회원 (주문조회)</button> 
                </div>
                <div id="id_pw">
                    <input className="id"  placeholder="아이디"></input>
                    <input className="pw"  placeholder="비밀번호"></input>
                </div>
                <button id="login_bt">로그인</button>
                <div id="find">
                    <div className="idfind">아이디 찾기</div>
                    <div className="bslash">&#124;</div>
                    <div className="pwfind">비밀번호 찾기</div>
                </div>
                <div id="ask">
                    <p>
                        아직 회원이 아니신가요? <br/> 회원이 되시면 다양한 혜택을 누릴 수 있습니다
                    </p>
                    <button id="membership">회원가입</button>
                </div>
            </form>
        </div>
    );
};

export default Account;

