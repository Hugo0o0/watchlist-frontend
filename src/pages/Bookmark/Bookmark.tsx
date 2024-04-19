import NoItems from "@/components/NoItems/NoItems";
import TitledCards from "@/components/TitledCards/TitledCards";
import useGetBookmarked from "@/utils/hooks/show/useGetBookmarked";
import { MdMovie } from "react-icons/md";

const Bookmark = () => {
  const { movies, series, isLoading } = useGetBookmarked();

  const hasBookmarkedShows = movies.length > 0 || series.length > 0;

  return (
    <div className="w-full flex flex-col gap-5">
      <TitledCards loading={isLoading} title="Movies" items={movies} />
      <TitledCards loading={isLoading} title="Series" items={series} />

      {!hasBookmarkedShows && !isLoading && (
        <NoItems
          itemIcon={<MdMovie size={40} />}
          message="You didn't bookmark any shows yet"
        />
      )}
    </div>
  );
};

export default Bookmark;
