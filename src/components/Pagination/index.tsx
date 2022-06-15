import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styles";

const Pagination = () => {
  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={100}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        // onPageChange={handleChangePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationContainer>
  );
};

export default Pagination;
