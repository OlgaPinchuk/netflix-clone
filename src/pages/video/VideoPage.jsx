// NPM packages
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function VideoPage() {
  //Properties
  const { videoId } = useParams();

  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <YouTube videoId={videoId} className="video" opts={opts} />
    </>
  );
}
