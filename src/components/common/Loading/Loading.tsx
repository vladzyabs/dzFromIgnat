import React from "react";
import {ReactSVG} from "react-svg";
import loader from "../../../assets/img/loader.svg"

function Loading() {

    const style = {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '25px',
    }

    return (
        <div style={style}>
            <ReactSVG src={loader}/>
        </div>
    )
}

export default Loading
