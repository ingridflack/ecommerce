import { ChangeEvent, FormEvent, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { order } from "../../services";
import * as S from "./styles";
import { format, parseISO } from "date-fns";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const OrderForm = () => {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    date: "",
  });

  const emptyCart = cart.length === 0;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;

    setInputValues((prev) => ({ ...prev, [inputName]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const { name, date } = inputValues;

      const body = {
        name: name,
        date: format(parseISO(date), "MM/dd/yyyy"),
        products: cart,
      };

      await order(body);

      clearCart();

      toast.success("Carrinho criado com sucesso!");

      router.push("/");
    } catch (err) {
      toast.error("Erro ao criar o pedido. Tente novamente.");

      console.error({ err });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <S.Wrapper>
      <S.FormTitle>Finalizar pedido:</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder="Digite o seu nome..."
          value={inputValues.name}
          onChange={handleChangeInput}
          name="name"
          required
          disabled={isLoading}
        />
        <S.Input
          type="date"
          value={inputValues.date}
          name="date"
          required
          disabled={isLoading}
          onChange={handleChangeInput}
          min={format(new Date(), "yyyy-MM-dd")}
        />

        <S.Button type="submit" disabled={isLoading || emptyCart}>
          {isLoading ? "SALVANDO PEDIDO" : "SALVAR"}
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default OrderForm;
