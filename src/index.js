import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducer from './reducers';

// const initialState = {
//     courses: [],
//     students:[],
//     teachers:[]
// };

const store = createStore(reducer, applyMiddleware(thunk));


// const store = createStore(function(state=initialState, action){
//     if( action.type == 'ADD_COURSE' ){
//         return {
//             ...state,
//             courses: [...state.courses, action.data]
//         };
//     }else if( action.type == 'DELETE_COURSE' ){
//         const myState = [...state.courses];
//         console.log(myState);

//         myState.forEach((stateItem, stateKey)=>{
//             if( stateItem == action.name ){
//                 myState.splice(stateKey, 1);
//             }
//         });

//         return {
//             ...state,
//             courses: myState
//         };
//     }else if( action.type == 'ADD_TEACHER' ){
//         return {
//             ...state,
//             teachers: [...state.teachers, action.name]
//         };    
//     }

//     return state;
// });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById('root'));

// store.subscribe(()=>{
//     const ol = document.querySelector('ol');
//     ol.innerHTML = '';
//     store.getState().forEach(val=>{
//         const li = document.createElement('li');
//         li.textContent = val;
//         ol.appendChild(li);

//         li.addEventListener('click', function(){
//             store.dispatch({
//                 type: 'DELETE_COURSE',
//                 name: this.textContent
//             });
//         });
//     });
//     console.log(store.getState());
// });

store.dispatch({
    type: 'ADD_COURSE', 
    data: 'React'
});

// document.querySelector('button').addEventListener('click', ()=>{
//     store.dispatch({
//         type:'ADD_COURSE',
//         data: document.querySelector('input').value
//     })
// });








// let ar = [1, 2, 3, 4];
// let ar2 = [5, 6];

// // ar.push(ar2);

// // ar2.forEach(val=>{
// //     ar.push(val);
// // });

// // console.log(ar);

// ar = [...ar, ...ar2];
// console.log(ar);