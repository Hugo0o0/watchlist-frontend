import { Text } from "@/components/UI";
import useGetSingleSeries from "@/utils/hooks/show/series/useGetSingleSeries";
import { useParams } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const SeriesDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleSeries(id);
  const sortedSeosons = data?.seasons.sort(
    (a, b) => a.seasonNumber - b.seasonNumber
  );

  return (
    <div className="w-full bg-mirage">
      {sortedSeosons &&
        sortedSeosons.map((season) => (
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
  );
};

export default SeriesDetails;
