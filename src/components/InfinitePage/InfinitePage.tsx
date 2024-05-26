import { useEffect, useState } from "react";
import { FormInput, Heading } from "../UI";
import useInfiniteLoaderInview from "@/utils/hooks/useInfiniteLoaderInview";
import {
  InfiniteData,
  UseInfiniteQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaSadTear, FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";
import CardsSkeleton from "../CardsSkeleton/CardsSkeleton";
import NoItems from "../NoItems/NoItems";
import { AxiosError } from "axios";

interface InfinitePageProps {
  pageTitle: string;
  queryResult: UseInfiniteQueryResult<InfiniteData<any, unknown>, Error>;
  mutation: UseMutationResult<
    any,
    AxiosError<
      {
        message: string;
      },
      any
    >,
    string,
    unknown
  >;
  children?: React.ReactNode;
}

const InfinitePage = ({
  pageTitle,
  queryResult,
  mutation,
  children,
}: InfinitePageProps) => {
  const [queryParam] = useSearchParams();
  const [query, setQuery] = useState(queryParam.get("query") || "");
  const navigate = useNavigate();

  const { hasNextPage, fetchNextPage, isFetching, isLoading, refetch } =
    queryResult;
  const handleLoadMore = (inView: boolean) => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (!query.length) {
      refetch();
      return;
    }
    if (query.length < 3) return;
    const debounced = debounce(() => {
      navigate(`?query=${query}`);
      mutation.mutate(query);
    }, 500);
    debounced();
    return () => debounced.cancel();
  }, [query]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setQuery(value);
  };

  const { ref } = useInfiniteLoaderInview(handleLoadMore);
  if (isLoading) return <CardsSkeleton count={20} size="medium" />;
  return (
    <div className="flex flex-col gap-5 w-full">
      <FormInput
        type="search"
        placeholder="Search for movies with at least 3 characters"
        onChange={handleSearch}
        value={query}
        icon={
          mutation.isPending ? <CircularProgress size={20} /> : <FaSearch />
        }
      />
      <Heading size="l">{pageTitle}</Heading>
      {children}
      <div ref={ref} />
      {isFetching && !isLoading && <CircularProgress className="mx-auto" />}
      {queryResult.data?.pages[0].data.length === 0 && (
        <NoItems
          message={`No result found with "${query}"`}
          itemIcon={<FaSadTear size={50} />}
        />
      )}
    </div>
  );
};

export default InfinitePage;
