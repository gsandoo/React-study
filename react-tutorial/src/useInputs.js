import {useState , useCallback } from "react";

function useInputs(initialForm){
    const  [form , setForm] = useState(initialForm); //form = initialForm
    const onChange = useCallback (e=>{ //onChange 함수 설정 .
        const {name , value} = e.target; // name(username 혹은 email)  값과 value() 추출
        setForm(form=> ({...form , [name]:value})) // 기존 형태에 덮어씌우기 
    } , []) // 기존에 마운트 될 때 한번만 렌더링 되고 다음부턴 안됨.
    
    
    const reset = useCallback (()=> setForm(initialForm),[initialForm]);   
    // 파라미터로 가져온 값이 있으니 deps 에 initialForm 추가

    return [form , onChange , reset];

};

export default useInputs;



