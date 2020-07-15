import React from "react";
import DemoEditSpan from "../components/demoJunior/DemoEditSpan";
import DemoSelect from "../components/demoJunior/DemoSelect";
import DemoRadio from "../components/demoJunior/DemoRadio";
import DemoPeople from "../components/demoJunior/DemoPeople";

function Junior() {

    return (
        <div className={'page'}>
            <h1>Junior</h1>
            <DemoPeople/>
            <DemoRadio/>
            <DemoSelect/>
            <DemoEditSpan/>
        </div>
    )
}

export default Junior