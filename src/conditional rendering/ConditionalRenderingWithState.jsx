import { useState } from "react"
import Show from "./Show";
import Hide from "./Hide";
import { shallowEqual } from "react-redux";

function ConditionalRenderingWithState() {
    let[show,setShow]=useState(true);

    let renderingCom;

    function showToggle(){
        setShow(!show)
    }

    // conditional rendering with if/else and variable

    if(show){
        renderingCom= <Show/>
    }else{
        renderingCom= <Hide/>
    }
    return(
        <>

        {
            show && <h1>If it is true it will be visible</h1>
        }
        
        {
            show?<><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, explicabo.</p><button onClick={showToggle}>More</button></>:<><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat sint nobis aliquam voluptatem assumenda eos rerum, maiores alias facilis cum voluptatibus deleniti aperiam recusandae cumque aspernatur, quis ea, temporibus sed! Dolores magni beatae natus repudiandae deleniti ipsa ex repellendus.</p><button onClick={showToggle}>Less</button></>
        }
        {renderingCom}
     <button className="btn btn-primary" onClick={showToggle}>{show?"Hide":"show"}</button>
    </>
  )
}

export default ConditionalRenderingWithState