import { useEffect, useState } from "react"
import Spinner from "../compoonent life cycle/Spinner";
import API from "./axiosConfig";
import Button from "../resuable component/Button";

function DataFetchingAxios() {
    let [users,setUsers]=useState([])
    // let BASE_URL="https://jsonplaceholder.typicode.com/users";
    let[loading,setLoading]=useState(true)

    async function getData(){
        try{
             setLoading(true)
            // let res=await axios.get(BASE_URL)
            let res=await API.get("/users")
            if(!res.status===200){
                throw new Error("data is not found!")
            }
            console.log(res.data);
            setUsers(res.data)
            setLoading(false)
            
        }catch(err){
             console.error("error message",err.message);
             setLoading(false)
             
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
    let apiDebounce=setTimeout(()=>{
         
      getData()
    },500)

    return ()=>{
        clearTimeout(apiDebounce)
    }
    },[])

    async function createUser(){
        try{
            let res=await API.post("/users",{
                "id": 201,
    "name": "Mallikarjun  Singh",
    "email": "malli.singh056@example.com",
    "phone": "+91-87800-00056",
    "address": "Flat 201, Silver Oak Residency, Sample Road, Coimbatore, Tamil Nadu, India",
    "imglink": "https://randomuser.me/api/portraits/men/55.jpg"

            })

            if(res.status==201){
                alert("new your is created");
                getData(); // Refresh the user list
            }
        }catch(err){
            console.error("err message",err.message)
        }
    }

    async function deleteContact(id){
        console.log("trigger",id);
        
        try{
            let res=await API.delete(`/users/${id}`);
            if(res.status===204){
                alert(`User with this ${id} is deleted!`);
                getData(); //refresh user list

            }
        }catch(err){
            console.error(err.message)
        }
    }
  return (
    <>
     <div className="container">
        <div className="row">
            {
               loading?<Spinner/>: users?.map(user=>{
                    return <li key={user.id}>{user.name}</li>
                })
            }

            <Button handleClick={createUser} className="btn btn-primary" buttonText="Create User"/>
            <Button handleClick={()=>{deleteContact("300")}} className="btn btn-danger ms-3" buttonText="Delete User"/>
        </div>
     </div>
    </>
  )
}

export default DataFetchingAxios