import Image from "next/image";

import { IProductItem } from "../../interfaces";
import { formatPrice } from "../../utils";
import { FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

interface ProductItemProps {
  product: IProductItem;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { name, price, id } = product;

  return (
    <S.Wrapper>
      <S.Product>
        <p className="product-name">{name}</p>
        <p className="product-price">{formatPrice(price)}</p>
      </S.Product>

      <S.ButtonWrapper>
        <S.Button type="button">
          <div className="quantity-wrapper">
            <FiShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default ProductItem;
