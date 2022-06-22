import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.big};
    padding: ${theme.spacings.medium};
  `}
`;

export const FormTitle = styled.h4`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    input + input {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const Input = styled.input`
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
      width: 400px;
    }

    &:disabled {
      background-color: ${theme.colors.gray.platinum};
      cursor: not-allowed;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.primary};
    color: ${theme.colors.gray.white};
    border: none;
    font-weight: 700;
    border-radius: 0.25rem;
    transition: opacity 200ms ease;
    font-size: ${theme.fontSize.medium};
    margin-top: ${theme.spacings.medium};

    height: 48px;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      background-color: ${theme.colors.gray.silver};
    }
  `}
`;
