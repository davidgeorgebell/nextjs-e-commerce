import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

const cartContext = createContext();

// reducer
const initialState = { cart: [] };

function reducer(state, action) {
  const products = [{ name: 'oi', sku: 1 }];
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        cart: [
          ...state.cart,
          products.find(product => product.sku === action.payload),
        ],
      };

    case 'REMOVER':

    case 'EMPTY':

    default:
      return state;
  }
}

// context
export const useCart = () => useContext(cartContext);

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = sku => dispatch({ type: 'ADD', payload: sku });
  const removeItem = () => dispatch({ type: 'REMOVE', payload: sku });
  const totalPrice = () => {};

  return (
    <cartContext.Provider
      value={{
        addItem,
        removeItem,
        totalPrice,
        cart: state.cart,
      }}>
      {children}
    </cartContext.Provider>
  );
}
