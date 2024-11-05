import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp; 