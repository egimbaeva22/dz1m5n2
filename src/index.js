import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";




const initialState = {
    counter:0
}

 const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_COUNTER':
            return{
                ...state, counter: state.counter + action.payload
            }
        case 'GET_COUNTER':
            return {
                ...state, counter: state.counter - action.payload
            }
        case 'CLEAR_COUNTER':
            return {
                counter: 0
            }
        default:
            return state
    }
}

const Store  =createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store ={Store}>
        <App />
    </Provider>
);

