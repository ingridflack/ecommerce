import { AiOutlineSearch } from "react-icons/ai";
import Header from "../../components/Header";

import * as S from "./styles";

import ProductItem from "../../components/ProductItem";
import Pagination from "../../components/Pagination";
import { IProductItem } from "../../interfaces";

interface ListProps {
  data: IProductItem[];
}

const ListPage = ({ data }: ListProps) => {
  return (
    <S.Wrapper>
      <Header />

      <div className="input-wrapper">
        <S.Search placeholder="Pesquisar produto..." />
        <AiOutlineSearch className="search-icon" />
      </div>

      <S.ProductList>
        {data.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </S.ProductList>

      <Pagination />
    </S.Wrapper>
  );
};

export default ListPage;
