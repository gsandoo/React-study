import React, { createContext , useContext, useState} from "react";

// ContextAPI 사용법
//createContext : context 값 생성.
// useContext : 생성된 context 값 사용.
// Provider : createContext 값을 value 를 통해서 지정할 수 있다.
const MyContext = createContext("default Value");


function Child(){
    const text = useContext(MyContext)
    return(
        <div>
            안녕하세요? {text}
        </div>
    );
};

function Parent ({text}){

    return <Child text ={text}/>
}

function GrandParent({text}){
    return <Parent text={text}/>
}

function ContextSample(){
    const [ value , setValue] = useState(true)
    return (
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
        <GrandParent/>
        <button onClick={()=>setValue(!value)}>Click Me !</button>
    </MyContext.Provider>
    )}
export default ContextSample;

