import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import { router } from "../routes";
import { useApp } from "../context/AppContext";
import { siteConfig } from "../data/siteConfig";
import { motion, stagger } from "motion/react";

import { CgMenuRight, CgClose } from "react-icons/cg";

import LangBtn from "../components/lang/LangBtn";
import ThemeBtn from "../components/theme/ThemeBtn";
import classes from "./HeaderNavigation.module.css";

import Logo from "../assets/Logo-default.png";
import LogoWhite from "../assets/Logo-scroll.png";


const HeaderNavigation = () => {
    const [ deviceWidth, setDeviceWidth ] = useState(window.innerWidth);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const { lang, theme } = useApp();
    const dropRef = useRef();
    
    const isMobile = deviceWidth <= 768; 
    const basicRoute = router.routes[0].children;

    const handleInnerWidth = () => {
        setDeviceWidth(window.innerWidth);
    }

    const handleOpenMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    useEffect(() => {
        window.addEventListener('resize', handleInnerWidth);

        return () => {
            window.removeEventListener('resize', handleInnerWidth);
        }
    }, []);

    useEffect(() => {
        if (isMobile) {
            document.body.classList.add("is-mobile");
        } else {
            document.body.classList.remove("is-mobile");
        }
    }, [ isMobile ])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("open-mobile-menu");
        } else {
            document.body.classList.remove("open-mobile-menu");
        }
    }, [ isMenuOpen, isMobile ])

    const containerList = {
        visible: { 
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delayChildren: stagger(0.07),
            },
         },
        hidden: { 
            opacity: 0,
            transition: {
                when: "afterChildren"
            }
        }
    }

    const itemList = {
        visible: { 
            opacity: 1,
            y: 0 
        },
        hidden: { 
            opacity: 0,
            y: -100
        }
    }

    const renderNavLinks = () => ( 
        <motion.ul className={`${classes.listMenu} md:flex md:items-center md:gap-2 ${theme === 'light' ? 'md:text-[#1a1a1a]' : 'md:text-[#ffffff]'}`}
            variants={containerList}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropRef}
        >
            {basicRoute
                .filter(item => item.labels)
                .map(item => 
                    <motion.li 
                        key={item.labels.en}
                        variants={itemList}
                        className="relative text-right"
                    >
                        <motion.div
                            transition={{ type: "spring", duration: 0.15 }}
                            className={`${item.hasDropdown ? 'flex items-center' : 'inline-block'} cursor-pointer md:flex`}
                        >
                            <NavLink
                                to={item.index ? '/' : item.path}
                                end={!!item.index}
                                className={({ isActive }) => 
                                    isActive ? "relative z-10 px-2 py-1 text-white cursor-default md:text-[#B24A4E]" : "px-2 py-1 relative z-10"
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.labels[lang]}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-pill"
                                                className="absolute inset-0 -z-10 border-[#ffffff] md:border-[#B24A4E] border-2 border-solid"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </motion.div>
                    </motion.li>
                )
            }
        </motion.ul> 
    )

    return <header className="flex flex-wrap items-center p-2 md:max-w-screen-2xl md:mx-auto">

        <div className="flex justify-start w-1/2 order-1 md:w-1/3">
            <Link to="/">
                <img className="max-w-28" src={theme === "light" ? Logo : LogoWhite} alt={siteConfig[lang].title} />
            </Link>
        </div>
        
        <nav className="flex justify-end w-1/2 order-1 mt-6 md:w-2/3">
            {isMobile && 
                <button 
                    type="button"
                    className={`cursor-pointer z-50 ${isMenuOpen ? 'fixed top-[7%]' : 'relative'}`}
                    onClick={handleOpenMenu}
                >
                    {isMenuOpen ? <CgClose className="text-3xl" /> : <CgMenuRight className="text-3xl" />}
                </button>
            }
            { (!isMobile || isMenuOpen) && renderNavLinks()}
        </nav>

        <LangBtn />
        
        <div className="w-1/6 flex justify-end -order-1">
            <ThemeBtn />
        </div>

    </header>
}

export default HeaderNavigation;