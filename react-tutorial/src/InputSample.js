import React ,{useState/*,useRef */} from "react";


// 인풋값은 빈상태 , 입력 상태 두 상태가 존재한다.
function InputSample(){
    const [text,setText] = useState(" ");
    // const nextInput = useRef(); //useRef  사용

    const onChange=(e)=>{
        setText(e.target.value); 
        console.log(e)
        //target은 이벤트발생한 DOM의 정보
        //target.value 은 DOM의 값
    }
    const onReset = ()=>{
        setText(" ");
        // nextInput.current.focus();
    }
    return(
        <div>
            <input 
            onChange={onChange} 
            value = {text}
            // ref = {nextInput}
            /> {/*value 값 필수*/}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
};

export default InputSample;

