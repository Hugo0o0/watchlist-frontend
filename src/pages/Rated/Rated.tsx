import NoItems from "@/components/NoItems/NoItems";
import TitledCards from "@/components/TitledCards/TitledCards";
import useGetRated from "@/utils/hooks/show/useGetRated";
import { MdMovie } from "react-icons/md";

const Rated = () => {
  const { movies, series, isLoading } = useGetRated();

  const hasRatedShows = movies.length > 0 || series.length > 0;

  return (
    <div className="w-full flex flex-col gap-5">
      <TitledCards loading={isLoading} title="Movies" items={movies} />
      <TitledCards loading={isLoading} title="Series" items={series} />
      {!hasRatedShows && (
        <NoItems
          itemIcon={<MdMovie size={40} />}
          message="You didn't rate any shows yet"
        />
      )}
    </div>
  );
};

export default Rated;
