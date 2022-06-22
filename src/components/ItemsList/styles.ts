import styled, { css } from "styled-components";

export const ProductTable = styled.table`
  ${({ theme }) => css`
    width: 100%;

    th {
      color: ${theme.colors.gray.silver};
      text-align: left;
      padding: ${theme.spacings.medium};
    }

    .empty-cart {
      padding-left: ${theme.spacings.medium};
    }
  `}
`;

export const TableColumn = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    border-bottom: 1px solid #eee;

    svg {
      color: ${theme.colors.primary};
    }

    button {
      border: none;
    }
  `}
`;

export const Quantity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;

      &:disabled {
        svg {
          cursor: not-allowed;
        }
      }
    }
  `}
`;

export const Total = styled.div`
  ${({ theme }) => css`
    text-align: end;
    margin-top: ${theme.spacings.medium};
    width: 100%;
  `}
`;
