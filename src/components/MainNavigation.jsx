import { NavLink, Link } from "react-router";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { routes } from "../routes.jsx";

import LogoDefault from "../assets/Logo-default.png";
import LogoScroll from "../assets/Logo-scroll.png";

import classes from "../components/MainNavigation.module.css";


const MainNavigation = () => {
    const [ isVisible, setIsVisible] = useState(false);

    const mainItems = routes[0]?.children || [];

    const handleMenuVisible = () => {
        setIsVisible((prevState) => !prevState)
    }

    return (
        <header>
            <div className={classes['nav-container']}>
                <h1>
                    <Link to='/'>
                        <img src={LogoDefault} alt="Aetheria Design Studio" />
                    </Link>
                </h1>
                <button type="button" className={classes['nav-menu-btn']} onClick={handleMenuVisible}>
                    <span>M</span>
                    <span className={classes['menu-btn--flex']}>
                        <span className={classes['btn__line']}></span>
                        <span className={classes['btn__line']}></span>
                        <span className={classes['btn__line']}></span>
                    </span>
                    <span>NU</span>
                </button>
                {isVisible && ( 
                    <nav className={isVisible.menu ? 'nav-is-mobile' : null}>
                        <ul>
                            {mainItems
                                .map((menuItem, index) => {
                                    const listItemKeys = menuItem.path || index;
                                    const hasChildren = menuItem.children && menuItem.children.length > 2;

                                    return (
                                        <li key={listItemKeys}>
                                            <NavLink 
                                                to={menuItem.path}
                                                end={!hasChildren}
                                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                                {menuItem.name}
                                                {menuItem.path === 'sluzby' ? <span><RiArrowDropDownLine /></span> : null}
                                            </NavLink>
                                            {
                                                hasChildren && (
                                                    <ul>
                                                        {menuItem.children
                                                            .filter(item => item.name)
                                                            .map((item) => {
                                                                console.log(item)
                                                                return (
                                                                    <li key={item.path}>
                                                                        <NavLink 
                                                                            to={menuItem.path + '/' + item.path}
                                                                            end={item.index}
                                                                            className={({ isActive }) => isActive ? classes.active : undefined} >
                                                                            {item.name}
                                                                        </NavLink>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    ) 
                }

                <nav className={classes["nav-is-not-mobile"]}>
                    <ul>
                        {mainItems
                            .map((menuItem, index) => {
                                const listItemKeys = menuItem.path || index;
                                const hasChildren = menuItem.children && menuItem.children.length > 2;

                                return (
                                    <li key={listItemKeys}>
                                        <NavLink 
                                            to={menuItem.path}
                                            end={!hasChildren}
                                            className={({ isActive }) => isActive ? classes.active : undefined} >
                                            {menuItem.name}
                                            {menuItem.path === 'sluzby' ? <span><RiArrowDropDownLine /></span> : null}
                                        </NavLink>
                                        {
                                            hasChildren && (
                                                <ul>
                                                    {menuItem.children
                                                        .filter(item => item.name)
                                                        .map((item) => {
                                                            console.log(item)
                                                            return (
                                                                <li key={item.path}>
                                                                    <NavLink 
                                                                        to={menuItem.path + '/' + item.path}
                                                                        end={item.index}
                                                                        className={({ isActive }) => isActive ? classes.active : undefined} >
                                                                        {item.name}
                                                                    </NavLink>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
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