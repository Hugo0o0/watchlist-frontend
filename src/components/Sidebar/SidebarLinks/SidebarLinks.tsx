import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Series from "./Series/Series";
import Bookmark from "./Bookmark/Bookmark";
import Rated from "./Rated/Rated";

const SidebarLinks = () => {
  return (
    <div className="flex md:flex-col mx-auto  gap-10">
      <Home />
      <Movie />
      <Series />
      <Bookmark />
      <Rated />
    </div>
  );
};

export default SidebarLinks;
