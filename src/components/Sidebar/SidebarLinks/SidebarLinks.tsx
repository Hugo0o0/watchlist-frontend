import Movie from "./Movie/Movie";
import Series from "./Series/Series";
import Bookmark from "./Bookmark/Bookmark";
import Rated from "./Rated/Rated";
import { MdLogout } from "react-icons/md";
import useAuth from "@/utils/hooks/auth/useAuth";

const SidebarLinks = () => {
  const { logout } = useAuth();
  return (
    <div className="flex md:flex-col mx-auto  gap-10">
      <Movie />
      <Series />
      <Bookmark />
      <Rated />
      <MdLogout
        className="cursor-pointer"
        onClick={() => {
          logout();
        }}
        size={25}
      />
    </div>
  );
};

export default SidebarLinks;
