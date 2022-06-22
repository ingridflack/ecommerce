import type { NextPage } from "next";
import Head from "next/head";
import { MainContainer } from "../../styles/shared";
import CartList from "../../views/Cart";

const Cart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meu carrinho</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <CartList />
      </MainContainer>
    </div>
  );
};

export default Cart;
