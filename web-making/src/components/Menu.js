import React, { useState  , useEffect} from "react";


function Menu(){
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);

    function handleScroll() {
      if (ScrollY > 299) {
        setScrollY(window.pageYOffset);
        setScrollActive(true);
      } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
      }
    }
    useEffect(() => {
      function scrollListener() {
        window.addEventListener("scroll", handleScroll);
      } //  window 에서 스크롤을 감시 시작
      scrollListener(); // window 에서 스크롤을 감시
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }; //  window 에서 스크롤을 감시를 종료
    });
        
        
        return(  
        <div id="page" className="flex" >
            <div className="main_left">
                <div className="home">HOME</div>
                    <img src="http://ecudemo222144.cafe24.com/web/3.jpg" alt="main_img"/>
                    <div id="further">
                        <p className={ScrollActive ? "small_further_text" : "further_text"} >FURTHER</p>
                    </div>
            </div>
            <div className="main_right">
                <div className="tab">
                    <div>ABOUT</div>
                    <div>PRODUCT</div>
                    <div>CONTACT</div>
                    <div>ACCOUNT</div>
                </div>
                <img src="http://ecudemo222144.cafe24.com/web/3.jpg" alt="main_img"/>
            </div>
        </div>
    );
};

export default Menu;

