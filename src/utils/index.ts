export const formatPrice = (price: number) => {
  const { format } = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return format(price);
};
