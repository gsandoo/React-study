# Routing 라우팅

- 어떤주소에 어떤 UI를 보여줄지?


# Single page Application (SPA)

- 라우팅을 클라이언트가 담당

- 서버 자원을 아낄 수 있다는 장점이 있음


# 리액트 라우팅은 대표적으로 두가지 라이브러리를 사용한다.

1. React-Router

- 리액트 라우터는 컴포넌트를 기반으로 라우팅 한다.

2. next.js

- 파일 경로 , 이름을 기반으로 라우팅을 한다.

- 서버사이드 렌더링을 쉽게 구현 가능하다.

- 코드 스플리팅도 쉬워짐.


# 리액트 라우터에서 사용되는 주요 컴포넌트 :

1. BrowserRouter

- History API 사용.

- 경로를 바꿀 떄 주소만 바꾸고 페이지를 다시 불러오진 않음.

2. HashRouter

- 주소에 # 를 사용함. 못생김, 옛날 브라우저 전용.

3. MemoryRouter

- 브라우저 주소와 무관함. 

- test 용으로 사용 적합.

- 임베디드 웹앱, 리액트 네이티브 등에서 사용.

4. StaticRouter

- 서버사이드 렌더링에서 사용하는 용도.

5. Route

- 라우트를 정의할 때 사용하는 컴포넌트
- import {Route} from 'react-router-dom'

6. Link

- a 태그 사용.

- Router 의 주소를 바꾸지만 새로고침 안됌.


# URL 파라미터와 쿼리

- 주소를 통해 동적인값을 읽어올 때 사용.

- URL : /profiles/gsandoo <strong>특정 데이터를 가져올 떄</strong>

- Query :  /filter?type=book&sort_by=date <strong>옵션주어 가져올 때</strong>


