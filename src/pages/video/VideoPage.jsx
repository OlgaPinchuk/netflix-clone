// NPM packages
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function VideoPage() {
  //Properties
  const { videoId } = useParams();

  const opts = {
<<<<<<< HEAD
    height: "200",
=======
    height: "600", // why 600? You lose a few points in design because of this, you could have researched how to make the whole component fit the whole screen
>>>>>>> added-review-feedback
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // What happens if i reload the page and i dont have a video ID? We should have something like:
  if (videoId === null) return <p>No video available. Go back and try again</p>;

  // Why we return just 1 component. This was the perfect place to import your BackButton component as well to click and go to the home page after watching the video
  return (
    <>
      <YouTube videoId={videoId} className="video" opts={opts} />
    </>
  );
}
