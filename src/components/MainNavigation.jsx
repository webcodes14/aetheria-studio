import { NavLink } from "react-router";

import classes from "../components/MainNavigation.module.css";

const MainNavigation = () => {

    return (
        <header>
            <nav>
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
        </header>
    )
}

export default MainNavigation;