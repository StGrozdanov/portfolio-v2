import { useContext } from "react";
import { BurgerContext } from "../contexts/BurgerContext";

export const useBurgerContext = () => useContext(BurgerContext);