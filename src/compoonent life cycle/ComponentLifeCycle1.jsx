import React, { useEffect, useState } from 'react'

function ComponentLifeCycle1() {
    let[count,setCount]=useState(0);
    let[count2,setCount2]=useState(0);

    useEffect(()=>{
        console.log("Runs Everytime whwn state updates");
        
    })

    // mounting phase

    useEffect(()=>{
      console.log("Runs only on compoenent mounting");
      
    },[])

    // updating phase

    useEffect(()=>{
      console.log("Runs everytime whenever dependency changes",count);
      
    },[count])

    useEffect(()=>{
        let timer=setInterval(()=>{
            setCount2(prev=>prev+1)
            console.log(count2);
            
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    })

    console.log();
    
  return (
    <>
        <h3>{count}</h3>
        <button className='btn btn-warning' onClick={()=>{setCount(prev=>prev+1)}}>{count}</button>

        <h4>{count2}</h4>
    </>
  )
}

export default ComponentLifeCycle1