import { useContext } from "react"
import CreateTheme from "./createTheme"

function Dashbord() {
    let{theme,toggleTheme}=useContext(CreateTheme)
  return (
    <>
      <p className="h3">Dashbord</p>
      <div className="conatiner">
         <div className="row">
            <div style={{height:"300px"}} className={`col-6 m-5 text-center ${theme==="light"?"bg-secondary text-light":"bg-dark text-light"}`}>
                  Container
            </div>
         </div>
         <div className="row">
            <div className="col-4">
                  <button onClick={toggleTheme} className={`${theme==="light"?"btn btn-secondary text-light":"btn btn-dark text-light"}`}>{theme==="light"?"Light Theme":"Dark Theme"}</button>
            </div>
         </div>
      </div>
    </>
  )
}

export default Dashbord