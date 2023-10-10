import { useContext } from "react";
import { BurgerContext } from "../contexts/BurgerContext";

export const useBurgerContext = () => {
    const context = useContext(BurgerContext);
    return context;
};