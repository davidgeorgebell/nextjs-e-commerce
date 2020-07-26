import '../styles/index.css';
import { CartContextProvider } from '../context/useCart';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
