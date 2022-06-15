import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

// import logo from "../../../public/assets/logo.svg";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <Link href="/" passHref>
        {/* <img src={logo} alt="Logotipo da Shopper" /> */}
        LOGO
      </Link>

      <Link href="/cart" passHref>
        <S.Cart>
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
              {/* {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} */}
              2 itens
            </span>
          </div>
          <MdShoppingBasket size={36} />
        </S.Cart>
      </Link>
    </S.Container>
  );
};

export default Header;
