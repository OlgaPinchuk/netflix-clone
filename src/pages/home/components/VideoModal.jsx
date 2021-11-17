// NPM packages
import { useState } from "react";
import YouTube from "react-youtube";

// Project files
import { isEmptyObject } from "scripts/utils/utils";
import EpisodesList from "./EpisodesList";

export default function VideoModal({ title }) {
  // Local state
  // const [season, setSeason] = useState(1);
  // const [episodes, setEpisodes] = useState([]);

  // console.log(Object.values(title.seasons[season].episodes));

  // Properties
  const videoId = title.videoId;
  const opts = {
    height: "480",
    width: "850",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div id="video" className="video-modal">
      <div className="preview">
        <img className="poster" src={title.mainImageUrl} />

        <div className="preview-content">
          <h2 className="title-name">{title.name}</h2>
          <button className="play-button">Play </button>
        </div>

        {/* <YouTube
          videoId={videoId}
          className="video"
          opts={opts}
          containerClassName="container-class"
        /> */}
      </div>

      <div className="body-container">
        <p className="description">{title.description}</p>

        {title.type === "Series" && !isEmptyObject(title.seasons) ? (
          <>
            <EpisodesList title={title} />
          </>
        ) : null}
      </div>
    </div>
  );
}
