import { NavLink, Link } from "react-router";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { routes } from "../routes.jsx";

import LogoDefault from "../assets/Logo-default.png";
import LogoScroll from "../assets/Logo-scroll.png";

import classes from "../components/MainNavigation.module.css";

const MainNavigation = () => {
    const [ isVisible, setIsVisible] = useState(false);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ scrollY, setScrollY ] = useState(0);

    const mainItems = routes[0]?.children || [];

    const handleMenuVisible = () => {
        if ( isMenuOpen ) {
            setIsMenuOpen(false);

            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, 600);

            return () => clearTimeout(timeout);
        } else {
            setIsMenuOpen(true);
            setIsVisible(true);
        }
    }

    useEffect(() => {
        if ( isVisible ) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => document.body.classList.remove('menu-open');
    }, [isVisible]);

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 md:h-auto z-50 ${scrollY > 0 ? classes['scroll-header'] : ''}`}>
            <div className={`${classes['nav-container']} ${scrollY > 0 ? classes['scroll-container'] : ''} md:max-w-screen-2xl mx-auto relative`}>
                <h1>
                    <Link to='.'>
                        <img src={scrollY > 0 ? LogoScroll : LogoDefault} alt="Aetheria Design Studio" />
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
                    <nav className={isVisible ? classes['nav-is-mobile'] : null}>
                        <button onClick={handleMenuVisible} className={classes['btn__menu--close']} type="button"><IoClose /></button>
                        <ul className={`${classes['menu__list']} ${isMenuOpen ? '' : classes['menu__list--close']}`}>
                            {mainItems
                                .map((menuItem) => {
                                    const listItemKeys = menuItem.path || 'domu';
                                    
                                    return (
                                        <li 
                                            key={listItemKeys} 
                                            className={listItemKeys === 'sluzby' ? `${classes.showDropdown} ${classes['menu__item']}` : classes['menu__item']}>
                                            <NavLink 
                                                to={menuItem.path ? menuItem.path : '.'}
                                                end={listItemKeys === 'domu'}
                                                className={({ isActive }) => isActive ? classes.active : undefined} >
                                                {menuItem.path === 'sluzby' ? <span><RiArrowDropDownLine /></span> : null}
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                                <span className={classes.layer}>{menuItem.name}</span>
                                            </NavLink>
                                            {
                                                listItemKeys === 'sluzby' && (
                                                    <ul>
                                                        {
                                                            menuItem.children
                                                            .filter(item => item.name)
                                                            .map(item => {
                                                                return (
                                                                    <li key={item.path}>
                                                                        <NavLink 
                                                                            to={menuItem.path + '/' + item.path}
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

                <nav className={`${classes["nav-is-not-mobile"]}`}>
                    <ul>
                        {mainItems
                            .map((menuItem, index) => {
                                const listItemKeys = menuItem.path || index;

                                return (
                                    <li key={listItemKeys}>
                                        <NavLink 
                                            to={menuItem.path ? menuItem.path : '.'}
                                            end={menuItem.index}
                                            className={({ isActive }) => isActive ? classes.active : undefined} >
                                            {menuItem.name}
                                            {menuItem.path === 'sluzby' ? <span><RiArrowDropDownLine /></span> : null}
                                        </NavLink>
                                        {listItemKeys === 'sluzby' && (
                                            <ul className={classes["dropdown-menu"]}>
                                                {menuItem.children
                                                    .filter(item => item.name)
                                                    .map((item) => {
                                                        return (
                                                            <li key={item.path}>
                                                                <NavLink 
                                                                    to={menuItem.path + '/' + item.path}
                                                                    className={({ isActive }) => isActive ? classes.active : undefined} >
                                                                    {item.name}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )}
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