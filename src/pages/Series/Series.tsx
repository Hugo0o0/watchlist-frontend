import useSeries from "@/utils/hooks/show/series/useSeries";
import useSearchSeries from "@/utils/hooks/show/series/useSearchSeries";
import InfinitePage from "@/components/InfinitePage/InfinitePage";
import { Series as SeriesType } from "@/@types/show/series";
import { Card } from "@/components/UI";

const Series = () => {
  const queryResult = useSeries();
  const mutation = useSearchSeries();

  return (
    <InfinitePage
      pageTitle="Series"
      queryResult={queryResult}
      mutation={mutation}
    >
      <div className="flex flex-wrap gap-10">
        {queryResult.data?.pages.flatMap((page: any) =>
          page.data.map((item: SeriesType) => (
            <Card
              name={item.name}
              size="medium"
              src={item.poster.large}
              status={item.status}
              to={`/series/${item.id}`}
              type="series"
              year={new Date(item.firstAirDate).getFullYear()}
              loading={queryResult.isLoading}
              key={item.id}
            />
          ))
        )}
      </div>
    </InfinitePage>
  );
};

export default Series;
