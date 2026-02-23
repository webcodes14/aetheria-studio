import { useApp } from "../../context/AppContext";
import { motion } from "motion/react";

import classes from "./ThemeBtn.module.css";

import { FaSun } from "react-icons/fa";
import { MdModeNight } from "react-icons/md";

const ariaBtnTheme = {
    light: {
        cs: "Přepnout na tmavý režim",
        en: "Switch to dark mode",
        ko: "다크 모드로 전환"
    },
    dark: {
        cs: "Přepnout na světlý režim",
        en: "Switch to light mode",
        ko: "라이트 모드로 전환"
    }
}

const ThemeBtn = () => {
    const { lang, theme, toggleTheme, isAnimating } = useApp();

    return <motion.button 
        type="button" 
        disabled={isAnimating}
        className={`${classes.themeBtn} ${classes[`${theme}`]}`}
        style={{ justifyContent: theme === 'light' ? "flex-start" : "flex-end" }}
        onClick={toggleTheme}
        aria-label={theme === 'light' ? ariaBtnTheme.light[lang] : ariaBtnTheme.dark[lang]}>
            {theme === 'light' ? (
                    <motion.span 
                        className={`${classes.themeBtnCircle} ${classes.themeBtnLight}`}
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 180 }}
                        layout
                        transition={{
                            type: "spring",
                            visualDuration: 0.3,
                            bounce: 0.4,
                        }}
                    >
                        <FaSun className="text-sm text-yellow-400" />
                    </motion.span>
                ) : (
                    <motion.span 
                        className={`${classes.themeBtnCircle} ${classes.themeBtnDark}`}
                        initial={{ opacity: 0, rotate: 180 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        layout
                        transition={{
                            type: "spring",
                            visualDuration: 0.3,
                            bounce: 0.4,
                        }}
                    >
                        <MdModeNight className="text-sm text-white" />
                    </motion.span>
                )
            }
    </motion.button>
}

export default ThemeBtn;