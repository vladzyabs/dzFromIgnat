import React from "react";
import style from "./Demo.module.scss";
import Button from "../common/Button/Button";
import {setLoadingAC} from "../../store/system/reducer";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store/store";
import {Dispatch} from "redux";

type PropsType = PropsFromRedux & {}

function DemoLoading(props: PropsType) {

    const onLoading = () => {
        props.setLoading(true)
        setTimeout(() => props.setLoading(false), 3000)
    }

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 10</h3>
            <Button onClick={onLoading}>start loading</Button>
        </div>
    )
}

const mstp = (state: RootState) => {
    return {}
}

const mdtp = (dispatch: Dispatch) => {
    return {
        setLoading: (value: boolean) => {
            dispatch(setLoadingAC(value))
        }
    }
}

const connector = connect(mstp, mdtp)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(DemoLoading)