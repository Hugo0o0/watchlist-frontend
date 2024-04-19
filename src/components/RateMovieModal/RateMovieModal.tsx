import { Dialog, DialogContent } from "@mui/material";
import { FC, useState } from "react";
import { Button, Heading, Rating } from "../UI";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useMovie from "@/utils/hooks/show/movie/useMovie";
import useRateMovie from "@/utils/hooks/show/movie/useRateMovie";

interface RateMovieModalProps {
  open: boolean;
  close: () => void;
}

const RateMovieModal: FC<RateMovieModalProps> = ({ open, close }) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useMovie(id!);
  const [rating, setRating] = useState<number>(data?.rating || 0);
  const { mutate, isPending } = useRateMovie();

  const handleRatingChange = (value: number | null) => {
    setRating(value || 0);
  };

  const handleRate = () => {
    const token = jwtDecode<{ id: string }>(localStorage.getItem("token")!);
    const ratingId = data?.ratings.find((r) => r.userId === token.id)?.id;
    mutate({
      id: data?.id!,
      rating,
      ratingId,
    });
  };

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
          loading={isPending}
          variant="secondary"
          disabled={data?.rating === rating}
          onClick={handleRate}
        >
          {data?.rating ? "Update Rating" : "Rate"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RateMovieModal;
