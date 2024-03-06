import Logo from "@/components/Logo/Logo";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Series from "./Series/Series";
import Bookmark from "./Bookmark/Bookmark";
import Rated from "./Rated/Rated";

const Sidebar = () => {
  return (
    <aside className="sticky top-[3.2rem] w-[9.6rem] py-[3.2rem] max-h-screen min-h-screen bg-mirage rounded-[20px] z-50 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-28">
        <Logo />
        <div className="flex flex-col gap-10">
          <Home />
          <Movie />
          <Series />
          <Bookmark />
          <Rated />
        </div>
      </div>
      <p>user</p>
    </aside>
  );
};

export default Sidebar;
