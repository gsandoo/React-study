import React, { useEffect } from "react";

function HistorySample({history}){
    const goBack = ()=> {
        history.goBack();
    };

    const goHome = ()=>{ 
        history.push("/"); // push : 이동 시 방문기록 남음
    };

    const replaceGoHome = ()=>{
        history.replace('/'); // replace : 이동 시 방문기록 안남음
    }

    useEffect(()=>{
        console.log(history)
        const unblock = history.block("정말 떠나실 건가요?");
        return ()=>{
            unblock(); //언마운트 될 시 => history url 을 떠날 시 , unblock을 사라지게 한다
        }
    },[history]);


    return(
        <div>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goHome}>홈으로</button>
          <button onClick={replaceGoHome}>홈으로 (replace)</button>  
        </div>
    );
};

export default HistorySample;

