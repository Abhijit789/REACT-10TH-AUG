
function UsecallBackChild({handleClick}) {
    console.log("Child Component Rendering");
    
  return (
    <>
     <h3>Child Component</h3>
     <button className="btn btn-secondary" onClick={handleClick}>Child Button Click</button>
    </>
  )
}

export default UsecallBackChild