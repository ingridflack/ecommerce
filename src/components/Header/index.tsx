import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

import Image from "next/image";

import * as S from "./styles";
import { useCart } from "../../hooks/useCart";

const Header = () => {
  const { cart } = useCart();
  const cartSize = cart.length;

  const renderCartSize = () => (
    <span data-testid="cart-size">
      {cartSize ?? "-"} {cartSize === 1 ? "item" : "itens"}
    </span>
  );

  return (
    <S.Container>
      <Link href="/" passHref>
        <a>
          <Image
            src="/assets/logo.svg"
            alt="Logotipo da Shopper"
            height={41}
            width={156}
          />
        </a>
      </Link>

      <Link href="/cart">
        <S.Cart>
          <div>
            <strong>Meu carrinho</strong>
            {renderCartSize()}
          </div>
          <MdShoppingBasket size={36} />
        </S.Cart>
      </Link>
    </S.Container>
  );
};

export default Header;
