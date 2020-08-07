import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            /* 
            기본적으로 redux의 state는 readonly -> action을 통해서만 변경함
            ES6 spread
            ...state : 간단히 말하면 배열을 풀어주는 것
            [...state, {text: action.text}] : 기존 array인 state의 contents(내용) + 새로운 object -> 새로운 array 생성
            기존의 state를 변경하지 않고, spread 연산자(...)를 사용하여 업데이트(새로 만듦)
            */ 
            return [...state, {text: action.text}]
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addToDo = (text) => {
    // dispatch를 통해 데이터를 배열 형식으로 보낼 수 있음
    store.dispatch({type: ADD_TODO, text});
}

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    addToDo();
}

form.addEventListener("submit", onSubmit);