import React, {useReducer} from "react"; // useState(변수값을 변경)


//reducer 함수
function reducer(state, action){ 
    switch (action.type){
        case "Increment":
            return state +1;
        case "Decrement":
            return state -1;
        default:
            throw new Error("Unhandled action !");
    }
}



function Counter(){
    // const [number, setNumber] = useState(0); 
    //[초기값,변경될값] 초기값은 0으로 둔다.
    // 배열 비구조화 할당을 사용

    //useReducer
    const [number , dispatch] = useReducer(reducer,0);

    const onIncrease=()=>{
            //setNumber(prevNumber=>prevNumber+1);  //전 값에 1을 더한다.

            //useReducer dispatch 값
            dispatch ({
                type: 'Increment'
            })
        
        };
    const onDecrease=()=>{
            //setNumber(prevNumber=>prevNumber -1);  //전 값에 1을 뺀다.

            //useReducer dispatch 값
            dispatch ({
                type: 'Decrement'
            })
            
        };
        return(
        <div>
            <h1>{number}</h1>  {/*초기 값(number) 0 */}
            <button onClick={onIncrease}>+1</button> {/*onIncrease 함수 호출*/}
            <button onClick={onDecrease}>-1</button> {/*onDecrease 함수 호출*/}
        </div>
    );
};

export default Counter;
