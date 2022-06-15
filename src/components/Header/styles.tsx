import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.big};
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.6;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: ${theme.spacings.small};

      strong {
        font-weight: 800;
      }

      span {
        font-size: ${theme.fontSize.small};
      }
    }
  `}
`;
