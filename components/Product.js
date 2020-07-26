import React from 'react';
import { useCart } from '../context/useCart';

export default function Product({ product }) {
  const { addItem, removeItem, findInCart } = useCart();
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image[0].url} alt={product.name} width='200' />

      <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
        Remove
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => addItem(product.sku)}>
        Add to cart (0)
      </button>
    </div>
  );
}
