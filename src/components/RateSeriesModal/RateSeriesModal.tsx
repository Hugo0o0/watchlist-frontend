import { Dialog, DialogContent } from "@mui/material";
import { FC, useState } from "react";
import { Button, Heading, Rating } from "../UI";
import useGetSingleSeries from "@/utils/hooks/show/series/useGetSingleSeries";
import { useParams } from "react-router-dom";
import useRateSeries from "@/utils/hooks/show/series/useRateSeries";
import { jwtDecode } from "jwt-decode";
import useUpdateSeries from "@/utils/hooks/show/series/useUpdateSeries";
import useDeleteSeriesRating from "@/utils/hooks/show/series/useDeleteSeriesRating";

interface RateSeriesModalProps {
  open: boolean;
  close: () => void;
}

const RateSeriesModal: FC<RateSeriesModalProps> = ({ open, close }) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSingleSeries(id);
  const [rating, setRating] = useState<number>(data?.rating || 0);
  const { mutate, isPending } = useRateSeries();
  const { mutate: updateRating } = useUpdateSeries();
  const { mutateAsync: deleteRating, isPending: isDeletePending } =
    useDeleteSeriesRating();

  const handleRatingChange = (value: number | null) => {
    setRating(value || 0);
  };

  const handleRate = () => {
    console.log("rate working");
    const token = jwtDecode<{ id: string }>(localStorage.getItem("token")!);
    const ratingId = data?.ratings.find((r) => r.userId === token.id)?.id;
    mutate({
      id: data?.id!,
      rating,
      ratingId,
    });
  };

  const handleUpdateRating = () => {
    console.log("update working");

    const token = jwtDecode<{ id: string }>(localStorage.getItem("token")!);
    const ratingId = data?.ratings.find((r) => r.userId === token.id)?.id;
    updateRating({
      ratingId: ratingId!,
      rating,
      seriesId: data?.id!,
    });
  };

  const handleDeleteRating = async () => {
    const token = jwtDecode<{ id: string }>(localStorage.getItem("token")!);
    const ratingId = data?.ratings.find((r) => r.userId === token.id)?.id;
    await deleteRating({
      id: data?.id!,
      ratingId: ratingId!,
    });
    setRating(0);
  };

  return (
    <Dialog open={open} onClose={!isPending ? close : () => {}}>
      <DialogContent className="flex flex-col gap-5 items-center">
        <Heading size="m">Rate {data?.name}</Heading>
        <Rating
          value={rating}
          max={10}
          size="large"
          onChange={(_, v) => handleRatingChange(v)}
        />
        <Button
          loading={isPending}
          variant="secondary"
          disabled={data?.rating === rating}
          onClick={data?.rating ? handleUpdateRating : handleRate}
        >
          {data?.rating ? "Update Rating" : "Rate"}
        </Button>

        {data?.rating && (
          <Button
            onClick={handleDeleteRating}
            disabled={isDeletePending}
            loading={isDeletePending}
          >
            Delete Rating
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RateSeriesModal;
