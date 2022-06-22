import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { IProductItem } from "../../../interfaces";

import * as S from "../styles";

interface ItemProps {
  product: any;
  onProductDecrement: (product: IProductItem) => void;
  onProductIncrement: (product: IProductItem) => void;
  onRemoveProduct: (productId: string) => void;
}

export const Item = ({
  product,
  onProductDecrement,
  onProductIncrement,
  onRemoveProduct,
}: ItemProps) => {
  return (
    <tr>
      <S.TableColumn>
        <strong>{product.name}</strong>
      </S.TableColumn>
      <S.TableColumn>
        <S.Quantity>
          <button
            type="button"
            data-testid="decrement-btn"
            disabled={product.quantity <= 1}
            onClick={() => onProductDecrement(product)}
          >
            <MdRemoveCircleOutline size={20} />
          </button>
          <input readOnly value={product.quantity} />
          <button
            type="button"
            data-testid="increment-btn"
            onClick={() => onProductIncrement(product)}
          >
            <MdAddCircleOutline size={20} />
          </button>
        </S.Quantity>
      </S.TableColumn>
      <S.TableColumn>
        <strong>{product.subTotal}</strong>
      </S.TableColumn>
      <S.TableColumn>
        <button
          type="button"
          data-testid="remove-btn"
          onClick={() => onRemoveProduct(product.id)}
        >
          <MdDelete size={20} />
        </button>
      </S.TableColumn>
    </tr>
  );
};

export default Item;
