import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const App = () => {

const count = useSelector(state => state.counter)
const dispatch = useDispatch()

    const plus =() => {
        dispatch({type:'ADD_COUNTER', payload:1})
    }
    const minus =() => {
    if (count> 0){
        dispatch({type:'GET_COUNTER', payload:1})
    }
    }
    const tenAdd =() => {
        dispatch({type:'ADD_COUNTER', payload:10})
    }
    const tenGet =() => {
        dispatch({type:'GET_COUNTER', payload:10})
    }
    const clear = () => {
        dispatch({type:"CLEAR_COUNTER"})
    }

    return (
        <div>
            <button onClick={() => tenAdd()}>+10</button>
            <button onClick={() => plus()} >+</button>
          <span>{count}</span>
            <button onClick={() => minus()}>-</button>
            <button onClick={() => tenGet()}>-10</button>
            <button onClick={() => clear()} >clear</button>
        </div>
    );
};

export default App;