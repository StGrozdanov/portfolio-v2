import { createContext, useState } from "react";
import { ContainerProps } from "./types";

interface BurgerContextType {
    isActive: boolean,
    update: () => void,
}

export const BurgerContext = createContext<BurgerContextType>({
    isActive: false,
    update: () => console.log('burger context is not initialized yet!')
});

export const BurgerProvider = ({ children }: ContainerProps) => {
    const [isActive, setIsActive] = useState(false);

    const update = () => {
        setIsActive(!isActive);
    };

    return (
        <BurgerContext.Provider value={{ isActive, update }}>
            {children}
        </BurgerContext.Provider>
    );
}