import { styled } from "@mui/material";
import Rating from "@mui/material/Rating";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FC4747",
  },
  "& .MuiRating-iconHover": {
    color: "#FC4747",
  },

  "& .MuiRating-iconEmpty": {
    color: "grey",
  },
});

export default StyledRating;
