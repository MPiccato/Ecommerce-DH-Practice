import { createContext } from "react";
import type { CardAction, CardState } from "./CartReducer";



interface CardContextType {
    state: CardState;
    dispatch: React.Dispatch<CardAction>;
}

export const CartContext = createContext({} as CardContextType);
