import { Button } from "@/components/UI";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={navigate.bind(null, -1)}>Go Back To Movies</Button>
    </div>
  );
};

export default MovieDetails;
