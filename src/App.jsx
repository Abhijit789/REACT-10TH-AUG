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
            <FormBindingForGroup/>
       </>
    )
}

export default App;
