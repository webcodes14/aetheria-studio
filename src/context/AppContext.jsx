import { createContext, useContext } from "react";

export const AppContext = createContext();

export const useApp = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useApp musí být použit uvnitř Provideru!');
    }

    return context;
};