import { useContext } from "react";
import { CarouselInputModalContext } from "../contexts/CarouselInputModalContext";

export const useCarouselInputModalContext = () => {
    const context = useContext(CarouselInputModalContext);
    if (!context) {
      throw new Error('useModalContext must be used within a ModalProvider');
    }
    return context.openModal;
  };