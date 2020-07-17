import React from "react";
import DemoEditSpan from "../components/demoJunior/DemoEditSpan";
import DemoSelect from "../components/demoJunior/DemoSelect";
import DemoRadio from "../components/demoJunior/DemoRadio";
import DemoPeople from "../components/demoJunior/DemoPeople";
import Time from "../components/demoJunior/DemoTime";

function Junior() {

    return (
        <div className={'page'}>
            <h1>Junior</h1>
            <Time/>
            <DemoPeople/>
            <DemoRadio/>
            <DemoSelect/>
            <DemoEditSpan/>
        </div>
    )
}

export default Junior