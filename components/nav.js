import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <ul className='flex justify-between items-center p-8'>
        <li>
          <Link href='/'>
            <a className='text-blue-500 no-underline'>Home</a>
          </Link>
        </li>
        <ul className='flex justify-between items-center space-x-4'>
          <li>
            <button onClick={() => setOpen(!open)}>
              <a className='btn-blue no-underline'>CART ({0})</a>
            </button>
          </li>
        </ul>
      </ul>

      <div
        className='right-0 absolute border border-solid border-4 border-gray-600 p-4 m-6'
        style={{ display: open ? 'block' : 'none' }}>
        <button onClick={() => setOpen(false)}>X</button>
        <p>CART</p>
      </div>
    </nav>
  );
}
