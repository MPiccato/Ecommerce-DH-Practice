import { useReducer, FC, ReactNode} from "react"
import { cartReducer, initialState } from "./CartReducer.ts"
import {CartContext} from "./CartContext.tsx"

interface CardProviderProps {
    children: ReactNode;
}

export const CartProvider: FC<CardProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )

}