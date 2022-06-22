import Header from "../../components/Header";
import OrderForm from "../../components/OrderForm";

import * as S from "./styles";
import ItemsList from "../../components/ItemsList";

const CartList = () => {
  return (
    <div>
      <Header />

      <S.Content>
        <S.ItemsListWrapper>
          <ItemsList />
        </S.ItemsListWrapper>

        <OrderForm />
      </S.Content>
    </div>
  );
};

export default CartList;
