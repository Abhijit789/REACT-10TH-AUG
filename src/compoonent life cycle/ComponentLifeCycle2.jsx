import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

function ComponentLifeCycle2() {
    let[count1,setCount1]=useState(0)
    let[count2,setCount2]=useState(0)

    let[users,setUsers]=useState([]);

    let [loading,setLoading]=useState(true)

    useEffect(()=>{
        console.log("Runs only when count 1 changes",count1);
        
    },[count1])

    
    useEffect(()=>{
        console.log("Runs only when count 2 changes",count2);
        
    },[count2])

    async function getData(){
        try{
            setLoading(true)
            let response=await fetch("https://jsonplaceholder.typicode.com/users");
            console.log("response",response);
            if(!response.ok){
                throw new Error("data is not found")
            }
            
            let data=await response.json()
            setUsers(data)
            setLoading(false)
        }catch(err){
            console.error(err.message);
            setLoading(false)
            
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
         let api=setTimeout(()=>{
            getData()
         },5000)

         return ()=>{
            clearTimeout(api)
         }
    },[])
  return (
    <div>
        <button className="m-5 btn btn-secondary" onClick={()=>setCount1(prev=>prev+1)}>Count 1: {count1}</button>
        <button className="m-5 btn btn-secondary" onClick={()=>setCount2(prev=>prev+1)}>Count 2: {count2}</button>
        {/* <pre>{JSON.stringify(users)}</pre> */}
        <ul>
            {
                loading?<Spinner/>:users?.map(user=><li key={user.id}>{user.name}</li>)
            }
        </ul>
    </div>
  )
}

export default ComponentLifeCycle2