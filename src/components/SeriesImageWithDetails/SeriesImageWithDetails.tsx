import { FC, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Text } from "../UI";
import RateSeries from "../RateSeries/RateSeries";
import RateSeriesModal from "../RateSeriesModal/RateSeriesModal";
import { Series } from "@/@types/show/series";
import BookmarkSeries from "../BookmarkSeries/BookmarkSeries";

interface SeriesImageWithDetailsProps {
  data?: Series;
}

const SeriesImageWithDetails: FC<SeriesImageWithDetailsProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const openModal = () => setOpen(true);
  if (!data) return null;
  return (
    <div className="relative h-[55rem] md:w-[60rem] overflow-hidden cursor-pointer group">
      <div className="flex flex-wrap items-center justify-between translate-y-full absolute bottom-0 left-0  w-full h-1/4 bg-mirage transition-all group-hover:translate-y-0">
        <div className="flex items-center gap-3">
          <FaStar />
          <Text>{data.averageRating} / 10</Text>
        </div>

        <RateSeries rated={Boolean(data.rating)} onClick={openModal} />
        <BookmarkSeries />
        <RateSeriesModal open={open} close={close} />
      </div>
      <img
        src={data.poster.large}
        alt={"Show image"}
        className="w-full h-full object-center"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/433X650";
        }}
        onScroll={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default SeriesImageWithDetails;
