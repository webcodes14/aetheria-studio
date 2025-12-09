import { Link, NavLink } from "react-router";

import { routes } from "../routes";

import classes from "../components/FooterNavigation.module.css";

import LogoScroll from "../assets/Logo-scroll.png";

const FooterNavigation = () => {
    const mainItems = routes[0]?.children || [];

    return (
        <footer className={classes.footer}>
            <div className="max-w-screen-2xl mx-auto p-4">
                <div>
                    <Link to='.'>
                        <img src={LogoScroll} alt="Aetheria Design Studio" />
                    </Link>
                    <nav>
                        <ul>
                            {mainItems
                                .filter(item => item.name)
                                .map((item) => {
                                    const listKeys = item.path || 'uvod';

                                    return (
                                        <li key={listKeys}>
                                            <NavLink 
                                                to={item.path ? item.path : '.'}
                                                end={listKeys === 'uvod'}
                                                className={({ isActive }) => isActive ? classes.active : undefined}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {mainItems
                            .filter(item => item.path === 'sluzby')
                            .map(item => {
                                
                                return (
                                    <ul key={item.path}>
                                        {item.children
                                            .filter(dropDownItem => dropDownItem.name)
                                            .map(dropDownItem => {
                                                
                                                return (
                                                    <li key={dropDownItem.path}>
                                                        <NavLink 
                                                            to={item.path + '/' + dropDownItem.path}
                                                            className={({ isActive }) => isActive ? classes.active : undefined}>
                                                                {dropDownItem.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                )
                            })
                        }
                    </nav>
                </div>
                <div>

                </div>
            </div>
        </footer>
    )
}

export default FooterNavigation;