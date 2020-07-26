import React from 'react';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Navbar from "./components/Navbar/Navbar";
import {paths} from "./layout/paths";
import Loading from "./components/common/Loading/Loading";
import {RootState} from "./store/store";
import {connect, ConnectedProps} from "react-redux";

function App(props: PropsFromRedux) {
    return (
        <HashRouter basename={'dzFromIgnat'}>
            <div className='App'>
                {
                    props.loading
                        ? <Loading/>
                        : <>
                            <Navbar/>
                            <Switch>
                                <Route path={paths.preJunior}><PreJunior/></Route>
                                <Route path={paths.junior}><Junior/></Route>
                                <Route path={paths.juniorPlus}><JuniorPlus/></Route>
                                <Redirect from={paths["/"]} to={paths.preJunior}/>
                            </Switch>
                        </>
                }
            </div>
        </HashRouter>
    );
}

const mstp = (state: RootState) => {
    return {
        loading: state.system.loading
    }
}

const connector = connect(mstp)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)