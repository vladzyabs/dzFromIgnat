import React from "react";
import DemoEditSpan from "../components/demoJunior/DemoEditSpan";
import DemoSelect from "../components/demoJunior/DemoSelect";
import DemoRadio from "../components/demoJunior/DemoRadio";

function Junior() {
    return (
        <div className={'page'}>
            <h1>Junior</h1>
            <DemoRadio/>
            <DemoSelect/>
            <DemoEditSpan/>
        </div>
    )
}

export default Junior