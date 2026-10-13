import { useContext } from "react"
import CreateTheme from "./createTheme"

function Navbar() {
    let{theme}=useContext(CreateTheme)
  return (
    <>
      <div className="container m-4">
        <div className="row">
            <div className="col">
                <ul className="">
                    <li className="d-inline-block"><a className={`text-decoration-none px-3 py-2 ${theme==="light"?"bg-secondary text-light":"bg-dark text-light"} text-light ms-2 rounded-2`} href="#">Home</a></li>
                    <li className="d-inline-block"><a className={`text-decoration-none px-3 py-2 ${theme==="light"?"bg-secondary text-light":"bg-dark text-light"} text-light ms-2 rounded-2`} href="#">About</a></li>
                    <li className="d-inline-block"><a className={`text-decoration-none px-3 py-2 ${theme==="light"?"bg-secondary text-light":"bg-dark text-light"} text-light ms-2 rounded-2`} href="#">More</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar