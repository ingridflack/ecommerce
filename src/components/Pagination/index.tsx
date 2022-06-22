import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

interface IPagination {
  pageCount: number;
  onPageChange: any;
}

const Pagination = ({ pageCount, onPageChange }: IPagination) => (
  <PaginationContainer>
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
    />
  </PaginationContainer>
);

export default Pagination;
