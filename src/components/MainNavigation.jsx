import { NavLink, Link } from "react-router";

import { routes } from "../routes.jsx";

import LogoDefault from "../assets/Logo-default.png";
import LogoScroll from "../assets/Logo-scroll.png";

import classes from "../components/MainNavigation.module.css";

const MainNavigation = () => {

    const mainItems = routes[0]?.children || [];

    console.log(mainItems);

    return (
        <header>
            <div className={classes['nav-container']}>
                <h1>
                    <Link to='/'>
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
                        {
                            mainItems.map((menuItem) => {
                                return (
                                    <li>
                                        <NavLink 
                                            to={menuItem?.path || null}
                                            end
                                            className={({ isActive }) => isActive ? classes.active : undefined} >
                                            {menuItem.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainNavigation;