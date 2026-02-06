import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(() => {
        return localStorage.getItem('app-theme') || 'light';
    });
    const [ lang, setLang ] = useState(() => {
        return localStorage.getItem('app-lang') || 'cs';
    });

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

        document.documentElement.lang = lang;
    }, [ theme, lang ]);

    const value = { theme, setTheme, lang, setLang }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}