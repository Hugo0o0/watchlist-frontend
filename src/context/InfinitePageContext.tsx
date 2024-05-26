import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createContext } from "react";

interface InfinitePageContextProps<T> {
  query?: UseInfiniteQueryResult<T, AxiosError<{ message: string }>>;
}

const InfinitePageContext = createContext<InfinitePageContextProps<any>>({
  query: undefined,
});

export default InfinitePageContext;
