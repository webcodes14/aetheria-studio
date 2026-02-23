import { useApp } from "../../context/AppContext";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import classes from "./LangBtn.module.css";

import flagCS from "../../assets/cz.svg";
import flagEN from "../../assets/gb.svg";
import flagKO from "../../assets/kr.svg";

const languages = [
    { code: "cs", label: "Čeština", icon: flagCS },
    { code: "en", label: "English", icon: flagEN },
    { code: "ko", label: "한국어", icon: flagKO },
]

const LangBtn = () => {
    const { theme, lang, setLang } = useApp();
    const [ isOpen, setIsOpen ] = useState(false);
    const dropRef = useRef();

    const handleOpenMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    useEffect(() => {
        const handleClickOutside = ( event ) => {
            if ( dropRef.current && !dropRef.current.contains(event.target) ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }

    }, []);

    const currentLang = languages.find(l => l.code === lang);

    return <div ref={dropRef} className={classes.dropdown}>
        <button 
            onClick={handleOpenMenu}
            className={isOpen ? classes.dropdownBtn : undefined}
            key={currentLang.code}>
                <img className={classes.flag} src={currentLang.icon} alt={currentLang.label} />
                <span className={`${classes.title} ${classes[`${theme}`]}`}>{currentLang.label}</span>
        </button>
        <AnimatePresence>
            {isOpen && 
                <motion.div 
                    className={`${classes.openMenu} ${classes[`${theme}`]}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    layout
                    transition={{
                        duration: 0.3, ease: "easeOut"
                    }}
                >
                    {languages
                        .filter(item => item.code !== lang)
                        .map((language) => {
                            return <button 
                                onClick={() => {setLang(language.code); setIsOpen(false);}}
                                key={language.code}>
                                    <img className={classes.flag} src={language.icon} alt={language.label} />
                                    <span className={`${classes.title}`}>{language.label}</span>
                            </button>
                        })
                    }
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default LangBtn;