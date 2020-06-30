import React from 'react';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Navbar from "./components/Navbar/Navbar";
import {paths} from "./layout/paths";

function App() {
    return (
        <HashRouter basename={'dzFromIgnat'}>
            <div className='App'>
                <Navbar/>
                <Switch>
                    <Route path={paths.preJunior}><PreJunior/></Route>
                    <Route path={paths.junior}><Junior/></Route>
                    <Route path={paths.juniorPlus}><JuniorPlus/></Route>
                    <Redirect from={paths["/"]} to={paths.preJunior}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App