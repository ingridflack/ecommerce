import { useCart } from "../../hooks/useCart";
import { IProductItem } from "../../interfaces";
import { formatPrice } from "../../utils";
import Item from "./Item";

import * as S from "./styles";

const ItemsList = () => {
  const { removeProduct, cart, updateProductAmount } = useCart();

  const emptyCart = cart.length === 0;

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId);
  };

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.quantity),
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.quantity;
    }, 0)
  );

  function handleProductIncrement(product: IProductItem) {
    updateProductAmount({
      productId: product.id,
      quantity: product.quantity + 1,
    });
  }

  function handleProductDecrement(product: IProductItem) {
    updateProductAmount({
      productId: product.id,
      quantity: product.quantity - 1,
    });
  }

  return (
    <div>
      <S.ProductTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map((product) => (
            <Item
              key={product.id}
              product={product}
              onProductDecrement={handleProductDecrement}
              onProductIncrement={handleProductIncrement}
              onRemoveProduct={handleRemoveProduct}
            />
          ))}

          {emptyCart && (
            <tr>
              <td colSpan={3}>
                <strong className="empty-cart">Seu carrinho está vazio.</strong>
              </td>
            </tr>
          )}
        </tbody>
      </S.ProductTable>

      <S.Total>
        Total do carrinho: <strong>{total}</strong>
      </S.Total>
    </div>
  );
};

export default ItemsList;
