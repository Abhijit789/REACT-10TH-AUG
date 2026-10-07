import { useState } from "react"


function StateManagement() {
    let[count,setCount]=useState(0);

    function increment(){
        setCount(count+1)
        setCount(count+1)
    }

    function incrementByPrevState(){
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
    }
  return (
    <>
     <h2>Count {count}</h2>
     <button className="btn btn-warning mx-2" onClick={increment}>Increment</button>
     <button className="btn btn-warning mx-2" onClick={incrementByPrevState}>Increment by Previous State</button>
    </>
  )
}

export default StateManagement