import { useState } from "react"

function FormBinding() {
    let[userName,setUserName]=useState("");

    function handleChange(e){
        console.log(e);
        let{name,value}=e.target;
        console.log(value);

        setUserName(value);
        
        
    }

    console.log("userName",userName);
    
  return (
    <>
     <div className="container mt-4">
        <div className="row">
            <div className="col-6">
                 <form action="">
                    <div className="mb-2">
                    <input type="text" onChange={handleChange} placeholder="Write Your Name"  className="form-control" name="userName" id="" />
                    </div>
                 </form>
            </div>

        </div>
        <div className="row">
            <div className="col-6">
                <p className="h2">{userName}</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default FormBinding