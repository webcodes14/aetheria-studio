import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

import classes from "./ThemeBtn.module.css";

import { FaSun } from "react-icons/fa";
import { MdModeNight } from "react-icons/md";

const ThemeBtn = () => {
    const { theme, setTheme } = useApp();

    const handleTheme = () => {
        setTheme((t) => t === 'light' ? 'dark' : 'light');
    }

    return <motion.button 
        type="button" 
        className={classes.themeBtn}
        style={{ justifyContent: theme === 'light' ? "flex-start" : "flex-end" }}
        onClick={handleTheme}
        aria-label="Doplnit vícero jazyků">
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