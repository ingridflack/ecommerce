import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0.25rem 0.25rem 2.5rem 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;

export const ButtonWrapper = styled.div``;

export const Product = styled.div`
  ${({ theme }) => css`
    .product-name {
      font-weight: 700;
      text-transform: lowercase;
      color: ${theme.colors.gray.dark};
      font-size: 1rem;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    .product-price {
      font-weight: 700;
      font-size: ${theme.fontSize.normal};
      margin: ${theme.spacings.tiny} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    justify-content: center;

    background-color: ${theme.colors.primary};
    color: ${theme.colors.gray.white};
    border: none;
    font-weight: 700;
    border-radius: 0.25rem;
    transition: opacity 200ms ease;
    font-size: ${theme.fontSize.medium};

    height: 48px;

    &:hover {
      opacity: 0.8;
    }

    .quantity-wrapper {
      border-radius: 0.25rem 0 0 0.25rem;
      background-color: ${theme.colors.primaryDark};
      padding: 0 ${theme.spacings.small};
      font-size: ${theme.fontSize.medium};

      display: flex;
      align-items: center;
    }

    > span {
      border-radius: 0 0.25rem 0.25rem 0;
      padding: 0 ${theme.spacings.medium};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      margin-right: ${theme.spacings.tiny};
      font-size: ${theme.fontSize.normal};
    }
  `}
`;
