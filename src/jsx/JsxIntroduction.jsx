function  JsxIntroduction(){
    // rules of JSX
    let name="jay";
    let offsetStyle={
        color:"blue",
        backgroundColor:"white",
        boxShadow:"0px 0px 5px grey,0px 0px 10px grey",
        height:"200px",
        width:"200px",
        borderRadius:"100px"
    }
    let box=<div  style={offsetStyle}>
        <h1>This is box</h1>
    </div>
    
    return (
        <div>
            <h1>My name is {name}</h1>
            <h2 className="head">Hello</h2>
            {/* <h2>{if(true) <h1>Hello world</h1>}</h2>  invalid expression */}
            {/* <h2>{let age=20}</h2> */}
            <div style={{height:"200px",width:"200px",border:"1px solid",backgroundColor:"grey"}}></div>
            {box}
        </div>
    )
}

export default JsxIntroduction;