## redux와 redux-toolkit 비교

<br />

> ### 폴더 구성

<br/>

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
    - redux      / immer 라이브러리를 사용한 코드와 사용 안한 코드 모두 포함됨
    - redux-toolkit
    
 ```
 => 똑같은 화면을 각각 redux, redux-actions, redux-toolkit 사용한 3가지 상황으로 나누어 코드로 작성하였습니다.
 
   
 <br />
 
 > ### 실행하기
 
 <br/>
 
 - 각 폴더에 들어가 실행해주세요.
 
 ```
 npm i
 npm run dev
 ```
 
 <br />
 
 > ### 주요 차이점
 
 <br />
 
 - 코드의 압축
 
    - redux : 액션 객체 생성 함수, 리듀서를 각각 작성해야 함.
    - redux-actions: 액션 객체 생성 함수, 리듀서 생성 코드를 좀더 간편하게 만들어 줌.
    - redux-toolkit: 액션 객체 생성 함수와 리듀서 생성 과정을 createSlice를 통해 한 과정으로 통합.
  
  <br />
  
 - 설치 라이브러리 감소
  
   - redux: 상태의 불변성 유지를 위한 라이브러리(immer), <br/>
     redux 개발자 도구 사용을 위한 라이브러리(redux-devtools-extension)을 설치 해야 함.
   - redux-toolkit: 라이브러리 자체에 해당 라이브러리들 포함됨. (따로 설치 X)
  
  <br />
  
 - 상태의 불변성 유지 편리
  
   - redux: 불변성 유지를 위해 객체를 풀어서 쓰거나, immer 라이브러리 사용 해야 함. 
   - redux-toolkit: 객체에 키 값 넣는 형태로 넣어도 불변성 유지 됨.
 
 <br />
 
 > ### 코드로 살펴보기
 
 - 코드의 압축
 
 <br />

```js

redux_toolkit_announce/action_with_parameter/redux_toolkit/src/store/slice/alphabetSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "선택 안됨",
};

const alphabetSlice = createSlice({
  name: "alphabet",
  initialState,
  reducers: {                          // 액션 객체 생성 함수와 리듀서 동시에 생성.
    changeAlphabet(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeAlphabet } = alphabetSlice.actions;   // 액션 export
export default alphabetSlice.reducer;                      // 리듀서 export
 
 
```
 
 <br />
 
 - 설치 라이브러리 감소
 
 <br />
 
 ```js
redux_toolkit_announce/advantage/redux_toolkit/src/store/store.js 
 
import postReducer from "./slice/postSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { post: postReducer },
  devTools: true,                                 // devtools 따로 설치하지 않아도 설정에 자체 내장
});

export default store;



redux_toolkit_announce/advantage/redux_toolkit/src/store/slice/postSlice.js 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data1: {
    title: "테스트용 제목 입니다.",
    text: "테스트용 본문 입니다.",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.data1.title = action.payload;         // 객체 안에 객체 형태의 데이터여도 immer 라이브러리 필요 X (하단 "상태의 불변성 유지 편리" 참고)
    },
    changeText: (state, action) => {
      state.data1.text = action.payload;
    },
  },
});

export const { changeTitle, changeText } = postSlice.actions;
export default postSlice.reducer;
 
 
 ```
 
 <br />
 
 - 상태의 불변성 유지 편리
 
 <br />
 
 ``` js
 
 immer 라이브러리 없이 불변성 유지하기
 
 const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGETITLE:
      return {
        data1: { ...state.data1, title: action.payload },
      };
    case CHANGETEXT:
      return { data1: { ...state.data1, text: action.payload } };

    default:
      return state;
  }
};
 
 
 
 immer 라이브러리 사용하여 불변성 유지하기
 
 import produce from "immer";
 
 const immerReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case IMMERCHANGETITLE:
        draftState.data1.immerTitle = action.payload;
        break;
      case IMMERCHANGETEXT:
        draftState.data1.immerText = action.payload;
        break;
      default:
        state;
    }
  });
};
 
 
 redux-toolkit 라이브러리로 불변성 유지하기
 
 
reducers: {
    changeTitle: (state, action) => {
      state.data1.title = action.payload;
    },
    changeText: (state, action) => {
      state.data1.text = action.payload;
    },
  },
 
 ```
 
<br />
