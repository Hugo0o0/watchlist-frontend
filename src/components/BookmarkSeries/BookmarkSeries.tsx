import useBookmarkSeries from "@/utils/hooks/show/series/useBookmarkSeries";
import { CircularProgress } from "@mui/material";
import { FC, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";

interface BookmarkProps {
  bookmarked?: boolean;
}

const BookmarkSeries: FC<BookmarkProps> = ({ bookmarked }) => {
  const [bookmarkedState, setBookmarkedState] = useState(bookmarked);
  const seriesId = useParams<{ id: string }>().id;
  const { mutateAsync, isPending } = useBookmarkSeries(
    seriesId!,
    bookmarkedState ? "remove" : "add"
  );

  const icon = bookmarkedState ? (
    <FaBookmark size={20} />
  ) : (
    <FaRegBookmark size={20} />
  );
  return (
    <button
      disabled={isPending}
      onClick={async () => {
        await mutateAsync();
        setBookmarkedState(!bookmarkedState);
      }}
      className="hover:bg-mirage transition-all rounded-full w-14 h-14 flex items-center justify-center"
    >
      {isPending && <CircularProgress size={20} />}
      {!isPending && <>{icon}</>}
    </button>
  );
};

BookmarkSeries.defaultProps = {
  bookmarked: false,
};

export default BookmarkSeries;
