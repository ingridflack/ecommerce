import { IProductItem } from "../../interfaces";
import { formatPrice } from "../../utils";
import { FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { useCart } from "../../hooks/useCart";

interface ProductItemProps {
  product: IProductItem;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProduct, cart } = useCart();
  const { name, price, id } = product;

  const quantity = cart?.find((product) => product.id === id)?.quantity || 0;

  const handleAddProduct = (product: IProductItem) => {
    addProduct(product);
  };

  return (
    <S.Wrapper>
      <S.Product>
        <p className="product-name">{name}</p>
        <p className="product-price">{formatPrice(price)}</p>
      </S.Product>

      <div>
        <S.Button type="button" onClick={() => handleAddProduct(product)}>
          <div className="quantity-wrapper">
            <FiShoppingCart /> {quantity ?? "-"}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </S.Button>
      </div>
    </S.Wrapper>
  );
};

export default ProductItem;
