import { NavLink, Link } from "react-router";

import LogoDefault from "../assets/Logo-default.png";
import LogoScroll from "../assets/Logo-scroll.png";

import classes from "../components/MainNavigation.module.css";

const MainNavigation = () => {

    return (
        <header>
            <div className={classes['nav-container']}>
                <h1>
                    <Link to='.'>
                        <img src={LogoDefault} alt="Aetheria Design Studio" />
                    </Link>
                </h1>
                <button type="button" className={classes['nav-menu-btn']}>
                    <span>M</span>
                    <span className={classes['menu-btn--flex']}>
                        <span className={classes['btn__line']}></span>
                        <span className={classes['btn__line']}></span>
                        <span className={classes['btn__line']}></span>
                    </span>
                    <span>NU</span>
                </button>
                <nav className={classes['nav-wrapper']}>
                    <ul>
                        <li>
                            <NavLink 
                                to={'.'}
                                end
                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                Úvod
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'portfolio'}
                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'sluzby'}
                                end
                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                Služby
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink 
                                        to={'sluzby/branding'}
                                        className={({ isActive }) => isActive ? classes.active : undefined} >
                                        Branding
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to={'sluzby/webdesign'}
                                        className={({ isActive }) => isActive ? classes.active : undefined} >
                                        Webdesign
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to={'sluzby/konzultace'}
                                        className={({ isActive }) => isActive ? classes.active : undefined} >
                                        Konzultace
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink 
                                to={'o-nas'}
                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                O nás
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'blog'}
                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'kontakt'}
                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainNavigation;