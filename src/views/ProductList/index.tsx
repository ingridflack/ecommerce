import { AiOutlineSearch } from "react-icons/ai";
import Header from "../../components/Header";

import * as S from "./styles";

import ProductItem from "../../components/ProductItem";
import Pagination from "../../components/Pagination";
import { IProductItem } from "../../interfaces";
import { ChangeEvent, useState } from "react";
import usePagination from "../../hooks/usePagination";

interface ListProps {
  data: IProductItem[];
}

const ProductList = ({ data = [] }: ListProps) => {
  const [search, setSearch] = useState("");
  const { paginatedList, pageCount, onPageChange } = usePagination(
    data,
    search
  );

  const noPagination = !paginatedList.length;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <S.Wrapper>
      <Header />

      <div className="input-wrapper">
        <S.Search
          placeholder="Pesquisar produto..."
          value={search}
          onChange={handleInputChange}
        />
        <AiOutlineSearch className="search-icon" />
      </div>

      <S.ProductList>
        {paginatedList?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

        {!paginatedList.length && (
          <S.EmptyList>Ops! Produto não encontrado.</S.EmptyList>
        )}
      </S.ProductList>

      {!noPagination && (
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      )}
    </S.Wrapper>
  );
};

export default ProductList;
