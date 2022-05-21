# React 존재 이유

- 재사용 이 쉽다.

- 이유는 컴포넌트(UI) 로 이루어져 있기 때문

- 사용자와의 인터랙션이 많아질 시 자바스크립트로만 제어하기엔 코드가 너무 복잡해지기에

- React는 유지보수가 쉽다. 

# React의 렌더링

- React 는 부모 컴포넌트가 렌더링 되면 자식 컴포넌트도 리렌더링 된다.

# Virtual DOM

- React 개발팀이 만든 가상의 DOM

- 실제 보여지는 DOM이 아닌 가상의 DOM

- 이로인해 변화가 생겨나는 UI만 업데이트(렌더링)가 가능해짐. 속도 향상


# JSX문법

- 리액트에서 사용하는 문법. 

- BABEL 이란 도구가 JSX문법을 자바스크립트로 변환시켜주어 화면에 보여지는 것

- HTML(태그)문법과 자바스크립트 를 동시에 작성 할 수 있다.

- 가독성이 좋다.



# JSX 문법 규칙

- 태그가 감싸는 형식이어야 한다. (태그가 하나일 시 셀프클로징 태그 쓰기)

- 태그가 2개 이상일시 FRAGMENT나 다른 태그로 감싸줘야한다.

- 자바스크립트 표현식을 사용하려면 JSX 내부에 {} 로 감싸줘서 넣어주면된다.

- 


# 컴포넌트

- UI 조각 이다.

- 컴포넌트 들이 모여 하나의 동적인 UI가 탄생한다.

- 컴포넌트는 함수와 클래스 두가지의 방법으로 만들 수 있다.



# 메소드

- 객체안의 함수.


# 리렌더링 (업데이트)

- 컴포넌트의 상태가 변할 때

- 부모 컴포넌트 상태가 변할 때

- 컴포넌트의 props 인자 가 바뀔 때


# 바인딩

- 두 객체를 This로 묶는 것.

- 메서드 안에서의 This 는 객체 자신을 가르킨다.

- 리액트(React) 에서의 바인딩은 <strong>컴포넌트에 이벤트메서드를 연결하는 방법</strong>


# PROPS (프로퍼티)

- 부모에서 정해져 자식 컴포넌트로 전해진 값 . 수정이 불가한 값

- 기본 값을 사용하고 싶으면 defaulProps 를 사용하면 된다.

# props.children (칠드런)

- 일반적인 태그가 아닌 컴포넌트로 쌓여져있을 때 안의 값을 조회하기 위해 사용

# state 

- 컴포넌트 내에서 이루어진 값. 변경이 가능하다. 

# React의 불변성

- 객체의 값을 변경할 시 , 변수 하나를 더 생성하여 spread 연산자를 이용해 변경해준다.

- 배열을 변경할 시 , filter , concat , map 사용

- React 에서는 모든 상태 값들을 불변성을 지키며 관리하게 된다.

- 이는 virtual DOM  과 real DOM 의 차이를 알아내기 위함.

- 상태값들이 변하게 된다면 DOM 전체를 리렌더링 해야함. 

- 이러한 것을 막고자 변경된 값만 바꾸기 위해 불변 객체를 사용한다.

# immer (임머 , 불변성을 쉽게 !)

- 

# React 의 false 값

- undefined, false 와 같은 값들은 React에서 렌더링이 되지않지만
0 은 예외.


# Hook 


- 기존에 되지 않았던 함수형 컴포넌트의 동적인 상태를 구현할 수 있게 해준다.

- 함수형 대신 클래스를 사용하면 구조적으로 사용자에게 혼란스러울 뿐 만 아니라 유지보수가 어려웠다. 

- useState(상태변화), useEffect(데이터 구독) 등을 사용할 수 있다.

# useState (상태변화)

-  [ state,setState] = useState(state값) 형태로 쓴다. (배열 구조분해)

# useRef (변수관리 , 특정 DOM 선택할 떄 )

- inputSample.js  참조(DOM 선택) , 

- useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다. useState 같은 경우 상태값을 변경하면 리렌더링이 되지만 useRef 는 값이 리렌더링 되지 않는다.

- 이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.

1. setTimeout, setInterval 을 통해서 만들어진 id
2. 외부 라이브러리를 사용하여 생성된 인스턴스
3. scroll 위치

# useEffect 

- 컴포넌트가 마운트 될 떄(처음 나타날 때) , 그리고 사라질 떄 (언마운트) , 그리고 업데이트 될 떄 어떤 작업을 하고 싶을 때 사용하는 훅이다.

- useEffect의 언마운트는 cleanup 또는 뒷정리 함수라고 한다. return 뒤에 함수를 붙혀주면 된다.

- deps 배열이 빈 값이라면 , 새로고침 될 때 한번만 일어나고 업데이트 될 때는 작동하지 않는다.

# cleanup 함수

- <strong>cleanup 함수는 컴포넌트가 사라질 떄 와 업데이트 될 떄 실행될 수 있다.</strong>

- deps 안에 값이 들어간다면 두 조건이 다 성립되고 빈 deps 라면 사라질 때 만 실행된다.


- 예: <pre>
    <strong>useEffect(()=>{</strong>
            // props => state
            // setInterval.setTimeout
            // Rest API 받아오기
            // D3, Video.js
    
            console.log("컴포넌트가 화면에 나타남");

            return ()=>(
            // cleanup 함수 (뒷정리 함수)
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거

            console.log("컴포넌트가 화면에서 사라짐.")
            )
        },[]);
        // 뒤에는 배열 (deps) 가 와야함
</pre>


# useMemo (메모이제이션 된 값을 반환)

- useMemo(fn,deps)

- 성능 최적화를 할 때 사용되는 훅이다. 

- useEffect 와 마찬가지로 뎁스가 들어갈 수 있다. deps 안에 값을 넣어줌으로써 성능을 최적화 (불필요한 작업 x) 해줄 수 있다.

- deps 안에 값을 넣어주지 않는다면 마운트 될 때 한번만 실행이 된다.

# useCallback (메모이제이션 된 함수를 반환)

- useCallback(fn,deps)

- 함수를 재사용하여 불필요한 리렌더링을 막아주는 훅이다.

- useMemo 와 마찬가지로 함수를 재사용하여 최적화를 위함이다.

- 똑같이 deps 가 들어간다. 


# React.memo (컴포넌트 재사용)

- 컴포넌트 리렌더링 최적화 (props 가 변경될 때만 리렌더링)

# useReducer 

- useReducer 는 useState 처럼 상태를 업데이트 해주는 훅이다.

- const [초기 값, 디스패치 ] = useReducer ( reducer 함수 , 초기 값 ) 형태로 작성한다.

- 여러 컴포넌트의 다양한 상태 변화에 useState 보다 적합 하다고 할 수있다.

- useReducer 훅은 초기상태설정 > reducer 함수생성 > useReducer 사용 순으로 설정할 수 있다.

- 사용방법 
<pre>
1. 초기 상태 생성 (필요 시 )
2. reducer 함수 생성
3. 컴포넌트 안에서 useReducer 사용.

</pre>

# Reducer 함수

- 상태를 업데이트해주는 함수이다. 

- 파라미터로 state 와 action 이 들어가며 , switch를 통해 action 의 type 을 , case 를 통해 case 를 지정해 줄 수 있다.

- case 를 통하여 다양한 상태들을 한 함수에 관리해줄 수 있는 장점이 있다.

# Context API (ContextSample.js 참조)

- Context API 를 사용하면 전역적으로 사용하는 값을 관리할 수 있다.

- createContext , useContext ,Provider 활용


# LifeCycle 메서드  (생명주기 메서드)

- 컴포넌트가 나타나고 업데이트 되고  에러가 나고 사라질 때 나타나는 메서드 

- 클래스 컴포넌트 에 해당됨.