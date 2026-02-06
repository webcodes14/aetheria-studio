import { useApp } from "../context/AppContext";

import { FaSun } from "react-icons/fa";
import { MdModeNight } from "react-icons/md";

const ThemeBtn = () => {
    const { theme, setTheme } = useApp();

    const handleTheme = () => {
        setTheme((t) => t === 'light' ? 'dark' : 'light');
    }

    return <button 
        type="button" 
        onClick={handleTheme}
        aria-label="Doplnit vícero jazyků">
            {theme === 'light' ? <FaSun /> : <MdModeNight />}
    </button>
}

export default ThemeBtn;