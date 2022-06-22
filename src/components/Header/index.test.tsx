import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from ".";
import { useCart } from "../../hooks/useCart";
import theme from "../../styles/theme";

jest.mock("../../hooks/useCart");

describe("Header", () => {
  it("should match the snapshot", () => {
    useCart.mockImplementation(() => ({
      cart: [
        {
          quantity: 2,
          id: 1,
          price: 179.9,
          title: "Produto teste",
        },
      ],
    }));

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should be able to render the amount of products added to cart - singular", () => {
    useCart.mockImplementation(() => ({
      cart: [
        {
          quantity: 2,
          id: 1,
          price: 179.9,
          title: "Produto teste",
        },
      ],
    }));

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const cartSizeCounter = getByTestId("cart-size");
    expect(cartSizeCounter.innerHTML).toBe("1 item");
  });

  it("should be able to render the amount of products added to cart - plural", () => {
    useCart.mockImplementation(() => ({
      cart: [
        {
          quantity: 2,
          id: 1,
          price: 179.9,
          title: "Produto teste",
        },
        {
          quantity: 3,
          id: 2,
          price: 19.9,
          title: "Produto teste 2",
        },
      ],
    }));

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const cartSizeCounter = getByTestId("cart-size");
    expect(cartSizeCounter.innerHTML).toBe("2 itens");
  });
});
