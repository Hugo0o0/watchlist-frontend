import { Dialog, DialogContent } from "@mui/material";
import { FC, useState } from "react";
import { Button, Heading, Rating } from "../UI";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useMovie from "@/utils/hooks/show/movie/useMovie";
import useRateMovie from "@/utils/hooks/show/movie/useRateMovie";
import useUpdateRating from "@/utils/hooks/show/movie/useUpdateRating";
import useDeleteMovieRating from "@/utils/hooks/show/movie/useDeleteMovieRating";

interface RateMovieModalProps {
  open: boolean;
  close: () => void;
}

const RateMovieModal: FC<RateMovieModalProps> = ({ open, close }) => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching: isMoviePending } = useMovie(id!);
  const [rating, setRating] = useState<number>(data?.rating || 0);
  const { mutate, isPending } = useRateMovie();
  const { mutate: updateRating, isPending: isUpdatePending } =
    useUpdateRating();
  const { mutateAsync: deleteRating, isPending: isDeletePending } =
    useDeleteMovieRating();

  const handleRatingChange = (value: number | null) => {
    setRating(value || 0);
  };

  const handleRate = () => {
    mutate({
      id: data?.id!,
      rating,
    });
  };

  const handleUpdateRating = () => {
    const token = jwtDecode<{ id: string }>(localStorage.getItem("token")!);
    const ratingId = data?.ratings.find((r) => r.userId === token.id)?.id;
    updateRating({
      id: data?.id!,
      rating,
      ratingId: ratingId!,
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

  const isLoading =
    isPending || isUpdatePending || isDeletePending || isMoviePending;

  return (
    <Dialog open={open} onClose={!isPending ? close : () => {}}>
      <DialogContent className="flex flex-col gap-5 items-center">
        <Heading size="m">Rate {data?.title}</Heading>
        <Rating
          value={rating}
          max={10}
          size="large"
          onChange={(_, v) => handleRatingChange(v)}
        />
        <Button
          loading={isLoading}
          variant="secondary"
          disabled={data?.rating === rating}
          onClick={data?.rating ? handleUpdateRating : handleRate}
        >
          {data?.rating ? "Update Rating" : "Rate"}
        </Button>
        {data?.rating && (
          <Button loading={isLoading} onClick={handleDeleteRating}>
            Delete Rating
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RateMovieModal;
