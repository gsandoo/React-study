import React from "react";
import Header from "./Header";
import '../css folder/contact.css'
function Contact(){
    return(
        <>
            <div>
              <Header/>
              <div id="contact_main" className="flex">
                 <div className="call">
                    <div className="cs">CS CENTER</div>
                    <div className="num">070 - 0000 - 0000</div>
                    <p className="time">MON-FRI AM 10:00 - PM 06:00 <br/>
                        SAT, SUN, HOLIDAY OFF
                    </p>
                 </div>
                 <div className="bank">
                    <div className="account">BANK ACCOUNT</div>
                    <p className="banknum">
                        은행명 0000000-000000 <br/>
                        은행명 0000000-000000 <br/>
                        예금주: 예금주 명 
                    </p>
                 </div>
                 <div className="exchange">
                    <div className="return">RETURN/EXCHANGE</div>
                    <p className="resend">
                        26-3, Hasan-gil, Janggun-myeon, Sejong-si, Republic of <br/> Korea<br/>
                        교환/반품 접수 후 위 주소로 택배를 보내주세요.
                    </p>
                    <button className="qna">Q&#38;A</button>
                 </div>
                 <div className="company">
                    <div className="comp">COMPANY</div>
                    <p className="where">
                        COMPANY.디자인블룸OWNER.디자인블룸E-MAIL.db@bloomskin.co.kr<br/>
                        BUSINESS LICENSE.00000-00-00000MALL ORDER LICENSE.00000-00-00000<br/>
                        ADDRESS.06267 서울특별시 강남구 강남대로 238-4 (도곡동)PRIVACY MANAGER.개인정보책임관리자<br/>
                        COPYRIGHT ⓒ DESIGNBLOOM ALL RIGHTS RESERVED 
                    </p>
                 </div>       
              </div>  
            </div>
            
        </>
        
    );
};

export default Contact;

