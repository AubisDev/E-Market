import { createContext, useContext, useEffect, useReducer } from "react";
import commerce from '../lib/commerce'


const cartDispatchContext = createContext();
const cartStateContext = createContext();

const SET_CART = 'SET_CART';
const ACTIVE_MENU = 'ACTIVE_MENU'

const initialState = {
    total_items: 0,
    total_unique_items: 0,
    line_items: []
}

const reducer =  (state,  action ) => {
    switch (action.type) {
        case SET_CART:
            return { 
                ...state,
                ...action.payload
            }

    default:
        return new Error(`Unknown acton:  ${action.type}`)
    }
}


export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState );

    useEffect(() => {
        getCart();
    }, [])

    const setCart = (payload) =>{
        dispatch({
            type: 'SET_CART',
            payload 
        })
    }
    
    const getCart = async() => {
        try {
            const cart = await commerce.cart.retrieve();
            
            setCart( cart );

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <cartDispatchContext.Provider value={{setCart}} >
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>        
    </cartDispatchContext.Provider>
    )

}

export const useCartState = () => useContext( cartStateContext );
export const useCartDispatch = () => useContext( cartDispatchContext );