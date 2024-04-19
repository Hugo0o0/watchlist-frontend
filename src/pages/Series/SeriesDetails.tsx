import BookmarkSeries from "@/components/BookmarkSeries/BookmarkSeries";
import RateSeries from "@/components/RateSeries/RateSeries";
import RateSeriesModal from "@/components/RateSeriesModal/RateSeriesModal";
import { Chip, Heading, Text } from "@/components/UI";
import useGetSingleSeries from "@/utils/hooks/show/series/useGetSingleSeries";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SeriesDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleSeries(id);
  const [openModal, setOpenModal] = useState(false);

  if (!data) return <div>Loading...</div>;

  const sortedSeosons = data?.seasons.sort(
    (a, b) => a.seasonNumber - b.seasonNumber
  );
  const firstAirYear = new Date(data?.firstAirDate).getFullYear();
  const lastAirYear = new Date(data?.lastAirDate).getFullYear();

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full p-5 flex gap-5"
    >
      <RateSeriesModal open={openModal} close={handleModal} />
      <img src={data?.poster.large} alt={data?.name} className="h-[65rem]" />
      <div className="w-full flex flex-col gap-5">
        {/* İsim, yer işareti, oyla */}
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-3">
            <Heading size="l">{data?.name}</Heading>
            <Text>
              ({firstAirYear} - {lastAirYear})
            </Text>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <FaStar />
              <Text>{data.averageRating} / 10</Text>
            </div>

            <BookmarkSeries bookmarked={data.bookmarked} />
            <RateSeries rated={Boolean(data.rating)} onClick={handleModal} />
          </div>
        </div>
        <Text size="m">{data?.overview}</Text>

        {data.genres.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Genres</Heading>
            <div className="flex items-center gap-5">
              {data?.genres.map((genre) => (
                <Chip label={genre.name} key={genre.id} />
              ))}
            </div>
          </div>
        )}

        {data.creators.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Creators</Heading>
            <div className="flex items-center gap-5">
              {data?.creators.map((creator) => (
                <Chip label={creator.name} key={creator.id} />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Heading>Seasons</Heading>
          {sortedSeosons.map((season) => (
            <Accordion key={season.id}>
              <AccordionSummary
                disabled={season.overview === ""}
                expandIcon={<FaArrowDown />}
              >
                {season.name} ({new Date(season.airDate).getUTCFullYear()})
              </AccordionSummary>
              <AccordionDetails>
                <Text>{season.overview}</Text>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SeriesDetails;
