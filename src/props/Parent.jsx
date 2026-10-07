import Child from "./Child"

function Parent() {
    let user={
        name:"shaktiman",
        age:45,
        email:"shaktiman@123.com"
    }

    let styleObject={
        
        color:"blue",
        backgroundColor:"white",
        boxShadow:"0px 0px 5px grey,0px 0px 10px grey",
        height:"200px",
        width:"200px",
        borderRadius:"100px"
    }
  return (
    <div>
        <h2>Parent Component</h2>
        <Child name="ajay" age={20} userDetails={user} styleObject={styleObject}/>
    </div>
  )
}

export default Parent