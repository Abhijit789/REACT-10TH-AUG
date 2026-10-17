import React, { useReducer } from 'react'

let initialState={count:0};

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        
        case "DECREMENT":
            return {count:state.count-1}
        
        case "RESET":
            return {count:0}
        
        default :{
            return {state}
        }
    }
      
}
function CounterState() {
    let[state,dispatch]=useReducer(reducer,initialState);

    function incrementCount(){
        dispatch({type:"INCREMENT"})
    }

    function decrementCount(){
        dispatch({type:"DECREMENT"})
    }

    function reset(){
        dispatch({type:"RESET"})
    }
  return (
    <div>
        <div className="row">
            <div className="col m-3">
                <h3>{state.count}</h3>
                <button className='btn btn-warning' onClick={incrementCount}>Increment</button>
                <button className='ms-2 btn btn-warning' disabled={state.count>0?false:true} onClick={decrementCount}>Decrement</button>
                <button className='ms-2 btn btn-warning' onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default CounterState