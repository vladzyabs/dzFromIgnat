import React from "react";
import DemoEditSpan from "../components/demoJunior/DemoEditSpan";
import DemoSelect from "../components/demoJunior/DemoSelect";

function Junior() {
    return (
        <div className={'page'}>
            <h1>Junior</h1>
            <DemoEditSpan/>
            <DemoSelect/>
        </div>
    )
}

export default Junior