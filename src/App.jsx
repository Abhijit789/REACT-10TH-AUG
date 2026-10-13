import { Fragment } from "react";
import ConditionalRendering from "./conditional rendering/ConditionalRendering";
import ConditionalRenderingWithState from "./conditional rendering/ConditionalRenderingWithState";
import FormBinding from "./form binding/FormBinding";
import JsxIntroduction from "./jsx/JsxIntroduction";
import ListRendering from "./list rendering/ListRendering";
import Parent from "./props/Parent";
import ObjectAsState from "./state/ObjectAsState";
import StateManagement from "./state/StateManagement";
import FormBindingForGroup from "./form binding/FormBindingForGroup";
import List from "./form binding/List";
import ComponentLifeCycle1 from "./compoonent life cycle/ComponentLifeCycle1";
import ComponentLifeCycle2 from "./compoonent life cycle/ComponentLifeCycle2";
import Menu from "./resuable component/Menu";
import Button from "./resuable component/Button";
import DataFetchingAxios from "./axios/DataFetchingAxios";
import ThemeProvider from "./context api/ThemeProvider";
import Dashbord from "./context api/Dashbord";
import Navbar from "./context api/Navbar";

function App(){
    return (
        <>
            {/* <JsxIntroduction/> */}
            {/* <Parent/> */}
            {/* <ListRendering/> */}
            {/* <ConditionalRendering/> */}
            {/* <ConditionalRenderingWithState/> */}
            {/* <StateManagement/> */}
            {/* <ObjectAsState/> */}
            {/* <FormBinding/> */}
            {/* <FormBindingForGroup/> */}
            {/* <List/> */}
            {/* <ComponentLifeCycle1/> */}
            {/* <ComponentLifeCycle2/> */}
            {/* <Menu/>
            <Button/> */}
            {/* <DataFetchingAxios/> */}
            <ThemeProvider>
                <Navbar/>
                <Dashbord/>
            </ThemeProvider>
            
       </>
    )
}

export default App;
