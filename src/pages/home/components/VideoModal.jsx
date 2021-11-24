// NPM packages
import { Link } from "react-router-dom";

// Project files
import { isEmptyObject } from "scripts/utils/utils";
import EpisodesList from "./EpisodesList";

export default function VideoModal({ title }) {
  return (
    <div id="video" className="video-modal">
      <div className="preview">
        <img className="poster" alt="Poster" src={title.mainImageUrl} />

        <div className="preview-content">
          <h2 className="title-name">{title.name}</h2>
          <Link className="play-button" to={`/video/${title.videoId}`}>
            Play{" "}
          </Link>
        </div>
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
