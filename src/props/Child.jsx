import GrandChild from "./GrandChild";

function Child({name,age,userDetails,styleObject}) {
    console.log(name);
    console.log(userDetails);

    let{name:userName,age:userAge,email}=userDetails;

    console.log("style object",styleObject);
    
    //  name="kishor"

    //  console.log(name);
     
    
    
  return (
    <div>
        <h2>Child Component</h2>
        <h2>My name is {name} and age is {age}</h2>
        <h3>my name is {userName} and age is {userAge} and email is {email}</h3>
        <div style={styleObject}>This is style from parent</div>
        <GrandChild name={name}/>
    </div>
  )
}

export default Child
