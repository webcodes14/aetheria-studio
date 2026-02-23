import { useState, useEffect, useCallback, useMemo } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(() => {
        return localStorage.getItem('app-theme') || 'light';
    });
    const [ lang, setLang ] = useState(() => {
        return localStorage.getItem('app-lang') || 'cs';
    });
    const [ isAnimating, setIsAnimating ] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsAnimating(true);
        setTheme((t) => t === 'light' ? 'dark' : 'light');
        document.body.classList.add('theme-animating');
        
        setTimeout(() => {
            setIsAnimating(false);
            document.body.classList.remove('theme-animating');
        }, 500);
    }, []);

    useEffect(() => {
        localStorage.setItem('app-theme', theme);
        localStorage.setItem('app-lang', lang);

        if (theme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }

        if ((lang === 'cs') || (lang === 'en')) {
            document.body.classList.add('font-latin');
            document.body.classList.remove('font-korean');
        } else {
            document.body.classList.add('font-korean');
            document.body.classList.remove('font-latin');
        } 

        document.documentElement.lang = lang;
    }, [ theme, lang ]);

    const value = useMemo(() => ({ 
        theme, 
        setTheme, 
        lang, 
        setLang, 
        toggleTheme, 
        isAnimating
    }), [ theme, lang, isAnimating, toggleTheme ])

    return (
        <AppContext.Provider value={value}>
            {children}
            {isAnimating && <div className={`theme-overlay ${theme}`}></div>}
        </AppContext.Provider>
    )
}