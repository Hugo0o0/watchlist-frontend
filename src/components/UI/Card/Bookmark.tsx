import classNames from "classnames";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const Bookmark = ({ isBookmarked }: { isBookmarked: boolean }) => {
  const classes = classNames(
    "w-[3.2rem] h-[3.2rem] flex items-center justify-center rounded-full bg-secondary transition-colors opacity-50 absolute top-2 right-2",
    {
      "hover:opacity-100 hover:bg-white [&>*]:hover:fill-kashmir-blue":
        !isBookmarked,
    }
  );

  return (
    <button className={classes}>
      {isBookmarked ? <FaBookmark size={15} /> : <FaRegBookmark size={15} />}
    </button>
  );
};

export default Bookmark;
