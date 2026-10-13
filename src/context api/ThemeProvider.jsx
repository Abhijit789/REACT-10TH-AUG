import { useState } from "react"
import CreateTheme from "./createTheme";

function ThemeProvider({children}) {
    let[theme,setTheme]=useState("light")

    function toggleTheme(){
        setTheme(theme==="light"?"dark":"light");
    }
  return (
    <CreateTheme.Provider value={{theme,toggleTheme}}>
         {children}
    </CreateTheme.Provider>
  )
}

export default ThemeProvider