import type { CardProduct } from "../interface";

export interface CardState {
    cartItems: CardProduct[];
}

export interface CardAction {
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
    payload: CardProduct | { id: number };
}


export const initialState: CardState = {
    cartItems: []
};

export const cartReducer = (state: CardState, action: CardAction): CardState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload as CardProduct]
                };
            }
           
        case 'REMOVE_FROM_CART':
           const {id: removeItemId} = action.payload;

           const itemToRemove = state.cartItems.find((item) => item.id === removeItemId);
            
           if (itemToRemove) {

                if (itemToRemove.quantity = 1) { 
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== removeItemId)
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === removeItemId ? { ...item, quantity: item.quantity - 1 } : item
                    )
                };
            }
           }

           return state;
           
           
        
        default:
            return state;
    }
};