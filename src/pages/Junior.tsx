import React from "react";
import DemoEditSpan from "../components/demoJunior/DemoEditSpan";
import DemoSelect from "../components/demoJunior/DemoSelect";
import DemoRadio from "../components/demoJunior/DemoRadio";
import DemoPeople from "../components/demoJunior/DemoPeople";
import Time from "../components/Time/Time";
import DemoLoading from "../components/demoJunior/DemoLoading";

function Junior() {

    return (
        <div className={'page'}>
            <h1>Junior</h1>
            <DemoLoading/>
            <Time/>
            <DemoPeople/>
            <DemoRadio/>
            <DemoSelect/>
            <DemoEditSpan/>
        </div>
    )
}

export default Junior