import React from 'react';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <HashRouter basename={'dzFromIgnat'}>
            <div className='App'>
                <Navbar/>
                <Switch>
                    <Route path={'/pre-junior'}><PreJunior/></Route>
                    <Route path={'/junior'}><Junior/></Route>
                    <Route path={'/junior-plus'}><JuniorPlus/></Route>
                    <Redirect from={'/'} to={'/pre-junior'}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App