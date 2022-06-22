import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .search-icon {
      position: absolute;
      top: 50%;
      left: ${theme.spacings.small};
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.gray.silver};
      font-size: ${({ theme }) => theme.fontSize.normal};
    }

    .input-wrapper {
      position: relative;
      margin-bottom: ${theme.spacings.medium};
      width: 100%;
    }
  `}
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Search = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.medium}
      ${theme.spacings.small} ${theme.spacings.big};
    border-radius: 0.25rem;
    border: 1px solid ${theme.colors.gray.dark};
    outline: none;
    width: 100%;

    &:focus {
      border: 1px solid ${theme.colors.primary};
    }

    @media screen and (min-width: 768px) {
      width: 630px;
    }
  `}
`;

export const EmptyList = styled.strong`
  width: 100%;
`;
