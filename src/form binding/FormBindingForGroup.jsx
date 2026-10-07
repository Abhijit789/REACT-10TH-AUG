import React, { useState } from 'react'

function FormBindingForGroup() {
    let [userDetails, setUSerDetails] = useState({
        name: "",
        age: "",
        email: "",
        contact: "",
    })

    let[isSubmit,setIsSubmit]=useState(false)

    let [createUser,setCreateUser]=useState([])

//     let prefix="user";

//     let user={
//         [prefix+"Name"]:"gangadhar"
//     }
//    console.log(user);
   
    function handleChange(e){
        let{value,name}=e.target;
        setUSerDetails((prev)=>({
             ...prev,
             [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        setCreateUser([...createUser,userDetails]);
        setIsSubmit(true)
    }
    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col-6">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <input type="text" placeholder='Name' onChange={handleChange} name="name" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <input type="number" placeholder='Age' onChange={handleChange} name="age" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <input type="email" placeholder='M@il' onChange={handleChange} name="email" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <input type="tel" placeholder='Mobile' onChange={handleChange} name="contact" className="form-control" />
                            </div>
                            <div className="mb2">
                                <input className='btn btn-primary' disabled={isSubmit?true:false} type="submit" value="Submit" />
                                <input className='btn btn-danger ms-2' type="reset" value="Reset" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row my-2">
                    <p className="h2">
                        <pre>{JSON.stringify(userDetails)}</pre>
                    </p>

                </div>
                <div className="row my-2">
                    <div className="col-6">
                         <ul>
                            {
                                createUser?.map(user=><li key={user.contact}>{user.name}{user.age}{user.contact}{user.email}</li>)
                            }
                         </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormBindingForGroup