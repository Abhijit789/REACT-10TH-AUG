import  { useState } from 'react'

function ObjectAsState() {
    let[user,setUser]=useState({
        name:"liladhar",
        age:23
    })

    let [fruit,setFruit]=useState(["apple","pineapple","custurdapple","banana","watermelon"]);

  let[item,setItem]=useState([])

  console.log(item);
  

    function updateUser(){
         setUser((prevUser)=>({
               ...prevUser,
               name:"atmaram"
         }))
    }
    console.log(user);
    
    function addNewItem(newItem){
        setItem([...item,newItem])
    }
  return (
    <>
     <h2 className='m-2'>{user.name}</h2>
     <h2 className='m-2'>{user.age}</h2>
     <button onClick={updateUser} className='btn btn-secondary m-2'>user update</button>
     

     <h2>Array As A state</h2>
     {
         item?.map((cItem,index)=><li key={index}>{cItem}</li>)
     }
      
     {
        fruit?.map(fr=><button onClick={()=>{addNewItem(fr)}}>{fr}</button>)
     }
    </>
  )
}

export default ObjectAsState