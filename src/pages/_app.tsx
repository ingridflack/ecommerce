import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globals";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "../hooks/useCart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
