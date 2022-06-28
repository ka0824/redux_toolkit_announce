## redux와 redux-toolkit 비교

> ## 폴더 구성
```
  - action_without_parameter / 카운터 기능
    - redux
    - redux-actions
    - redus-toolkit 
    
  - action_with_parameter   / 버튼으로 상태 변화
    - redux
    - redux-actions
    - reudx-toolkit
   
  - advantage    / redux-toolkit을 사용했을 때의 이점
    - redux
    - redux-toolkit
    
 ```
 => 똑같은 화면을 redux, redux-actions, redux-toolkit으로 작성한 코드로 구현하였습니다.
 
   
 <br />
 
 > ## 실행하기
 
 - 각 폴더에 들어가 실행해주세요.
 
 ```
 npm i
 npm run dev
 ```
 
 <br />
 
 > ## 주요 차이점
 
 - 코드의 압축
 
  - redux : 액션 객체 생성 함수, 리듀서를 각각 작성해야 함.
  - redux-actions: 액션 객체 생성 함수, 리듀서 생성 코드를 좀더 간편하게 만들어 줌.
  - redux-toolkit: 액션 객체 생성 함수와 리듀서 생성 과정을 createSlice를 통해 한 과정으로 통합.
  
  <br />
  
  - 설치 라이브러리 감소
  
  - redux: 상태의 불변성 유지를 위한 라이브러리(immer), redux 개발자 도구 사용을 위한 라이브러리(redux-devtools-extension)을 설치 해야 함.
  - redux-toolkit: 라이브러리 자체에 해당 라이브러리들 포함됨. (따로 설치 X)
  
  
  - 상태의 불변성 유지 편리
  
  - redux: 불변성 유지를 위해 객체를 풀어서 쓰거나, immer 라이브러리 사용 해야 함. 
  
  - redux-toolkit: 객체에 키 값 넣는 형태로 넣어도 불변성 유지 됨.
 
