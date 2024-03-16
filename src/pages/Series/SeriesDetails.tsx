import { Button, Spinner } from "@/components/UI";
import useGetSeries from "@/utils/hooks/show/series/useGetSeries";
import { useNavigate, useParams } from "react-router-dom";

const SeriesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetSeries(id);
  console.log(data, isFetching);

  return (
    <div>
      <Button onClick={navigate.bind(null, -1)}>
        {isFetching ? <Spinner /> : "Back"}
      </Button>
    </div>
  );
};

export default SeriesDetails;
