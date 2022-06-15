import styled from "styled-components";

export const PaginationContainer = styled.div`
  .pagination {
    font-size: 14px;
    color: #000;
    margin: 35px auto;
    display: flex;
    list-style: none;
    outline: none;
    width: 100%;
    justify-content: center;
  }

  .pagination > .active > a {
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }

  .pagination > li > a {
    border: none;
    display: block;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    border: 1px solid transparent;
    margin-right: 0.15rem;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    border-radius: 6px;
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }

  .pagination a:hover {
    background-color: rgba(73, 162, 130, 0.4);
    border-radius: 6px;

    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }

  .pagination > li > a,
  .pagination > li > span {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }

  /* @media (max-width: 768px) {
    .pagination > li:not(.next):not(.previous) {
      display: none;
    }
  } */
`;
