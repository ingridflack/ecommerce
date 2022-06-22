import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import Item from ".";

jest.mock("../../../hooks/useCart");

const renderTableContainer = (children: any) => (
  <ThemeProvider theme={theme}>
    <table>
      <tbody>{children}</tbody>
    </table>
  </ThemeProvider>
);

describe("Item", () => {
  const mockedProduct = {
    quantity: 2,
    id: 1,
    price: 179.9,
    title: "Produto teste",
  };

  const handleProductDecrementMock = jest.fn();
  const handleProductIncrementMock = jest.fn();
  const handleRemoveProductMock = jest.fn();

  it("should match the snapshot", () => {
    const { container } = render(
      renderTableContainer(
        <Item
          product={mockedProduct}
          onProductDecrement={handleProductDecrementMock}
          onProductIncrement={handleProductIncrementMock}
          onRemoveProduct={handleRemoveProductMock}
        />
      )
    );

    expect(container).toMatchSnapshot();
  });

  it("should call handleProductDecrement function", () => {
    const { getByTestId } = render(
      renderTableContainer(
        <Item
          product={mockedProduct}
          onProductDecrement={handleProductDecrementMock}
          onProductIncrement={handleProductIncrementMock}
          onRemoveProduct={handleRemoveProductMock}
        />
      )
    );

    const productDecrementBtn = getByTestId("decrement-btn");
    fireEvent.click(productDecrementBtn);

    expect(handleProductDecrementMock).toHaveBeenCalledWith(mockedProduct);
  });

  it("should call handleProductIncrement function", () => {
    const { getByTestId } = render(
      renderTableContainer(
        <Item
          product={mockedProduct}
          onProductDecrement={handleProductDecrementMock}
          onProductIncrement={handleProductIncrementMock}
          onRemoveProduct={handleRemoveProductMock}
        />
      )
    );

    const productDecrementBtn = getByTestId("decrement-btn");
    fireEvent.click(productDecrementBtn);

    expect(handleProductDecrementMock).toHaveBeenCalledWith(mockedProduct);
  });

  it("should call handleRemoveProduct function", () => {
    const { getByTestId } = render(
      renderTableContainer(
        <Item
          product={mockedProduct}
          onProductDecrement={handleProductDecrementMock}
          onProductIncrement={handleProductIncrementMock}
          onRemoveProduct={handleRemoveProductMock}
        />
      )
    );

    const productDecrementBtn = getByTestId("decrement-btn");
    fireEvent.click(productDecrementBtn);

    expect(handleProductDecrementMock).toHaveBeenCalledWith(mockedProduct);
  });
});
