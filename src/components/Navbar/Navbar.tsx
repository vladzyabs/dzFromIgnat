import React from "react";
import {NavLink} from "react-router-dom";

import style from "./Navbar.module.scss"

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.navIcon}>
                <div className={style.iconLine}></div>
                <div className={style.iconLine}></div>
                <div className={style.iconLine}></div>
            </div>
            <nav className={style.nav}>
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/pre-junior'}>pre junior</NavLink>
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/junior'}>junior</NavLink>
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/junior-plus'}>junior plus</NavLink>
            </nav>
        </div>
    )
}

export default Navbar