import  { useState } from 'react'
import UsecallBackChild from './UsecallBackChild';

function UsecallBackParent() {
    let[count,setCount]=useState(0);

    function handleClick(){
        console.log("Child button click");
        
    }

    console.log("Parent Component Rendering");
    
  return (
    <>
      <h2>Parent Component</h2>
      <h4>{count}</h4>
      <button className='btn btn-warning m-3' onClick={()=>{setCount(prev=>prev+1)}}>Increment</button>
      <UsecallBackChild handleClick={handleClick}/>
    </>
  )
}

export default UsecallBackParent