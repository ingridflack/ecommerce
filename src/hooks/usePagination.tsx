import { useCallback, useMemo, useState } from "react";
import { IProductItem } from "../interfaces";

const INITIAL_PAGINATION = { page: 0, limit: 25 };

const usePagination = (productList: IProductItem[], search: string) => {
  const [pagination, setPagination] = useState({ ...INITIAL_PAGINATION });

  const pageCount = useMemo(
    () => Math.ceil(productList.length / pagination.limit),
    [productList.length, pagination.limit]
  );

  const filteredList = useMemo(
    () =>
      productList.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      ),
    [productList, search]
  );

  const paginatedList = useMemo(() => {
    const { limit, page } = pagination;
    const initialStep = limit * page;

    return filteredList.slice(initialStep, initialStep + limit);
  }, [pagination, filteredList]);

  const onPageChange = useCallback(({ selected }: { selected: number }) => {
    setPagination((prev) => ({ ...prev, page: selected }));
  }, []);

  console.log({ productList, filteredList, paginatedList });

  return { paginatedList, pageCount, onPageChange };
};

export default usePagination;
