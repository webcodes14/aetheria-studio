import { Outlet, useLocation } from "react-router";

import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import HeaderNavigation from "./HeaderNavigation";
import FooterNavigation from "./FooterNavigation";

const RootLayout = () => {
    const [ visibleScrollBtn, setVisibleScrollBtn ] = useState(false);
    const { pathname, hash } = useLocation();

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if ( window.scrollY > 100 ) {
                setVisibleScrollBtn(true);
            } else {
                setVisibleScrollBtn(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0,0);
        }
    }, [ pathname, hash ])

    return (
        <div className="relative">
            <HeaderNavigation />
            <main className="p-2 md:max-w-screen-2xl md:mx-auto">
                <Outlet />
                <AnimatePresence>
                    {visibleScrollBtn && (
                        <motion.button 
                            type="button"
                            className="w-8 h-8 flex items-center text-black justify-center cursor-pointer bg-white fixed bottom-[5%] right-[5%] rounded-full drop-shadow-[0_0_6px_gray]"
                            onClick={scrollTop}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <FaArrowUp />
                        </motion.button>
                    )}
                </AnimatePresence>
            </main>
            <FooterNavigation />
        </div>
    )
}

export default RootLayout;