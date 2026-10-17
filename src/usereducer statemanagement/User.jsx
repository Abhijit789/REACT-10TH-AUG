import { useReducer, useState } from "react";

let initialState=[];

function userReducer(state,action){
    switch(action.type){
        case "ADD_USER":
            return [...state,action.payload]
        
        case "DELETE_USER":
            return state.filter(user=>{
                console.log(action.payload);
                
                return user.id !== action.payload
            })
        
        case "CLEAR_USER":
            return []
            
            
    }

}
function User() {
    let[loading,setLoading]=useState(true)
    let[state,dispatch]=useReducer(userReducer,initialState);

    function addUser(){
        let user={
            id:Date.now(),
            name:"shaktiman",
            email:"shakti@123gmail.com"
        }
        dispatch({type:"ADD_USER",payload:user})
        setLoading(false)
    }
    
    function deleteUser(id){
       
        dispatch({type:"DELETE_USER",payload:id})
        setLoading(false)
    }

    function resetUser(){
       
        dispatch({type:"RESET_USER"})
        setLoading(true)
    }


    console.log(state);
    
  return (
    <>
      {
            loading?"Loading...":state.map(user=>{
                return <li key={user.id}>{user.name} <button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>{user.id}</button></li>
            })
      }
      <button className="btn btn-secondary m-3" onClick={addUser}>Add User</button>
      <button className="btn btn-secondary m-3" onClick={resetUser}>RESET User</button>
    </>
  )
}

export default User