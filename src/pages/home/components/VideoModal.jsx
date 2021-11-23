// NPM packages
import { Link } from "react-router-dom";

// Project files
import EpisodesList from "./EpisodesList";
import useFetch from "hooks/useFetch";

export default function VideoModal({ title }) {
  // Properties
  const { id, name, description, mainImageUrl, videoId, type } = title;

  const isSeries = type === "Series";
  const path = isSeries ? `titles/${id}/seasons` : null;

  // Fetch seasons
  const { data: seasons } = useFetch(path);

  return (
    <div id="video" className="video-modal">
      <div className="preview">
        <img className="poster" alt="Poster" src={mainImageUrl} />

        <div className="preview-content">
          <h2 className="title-name">{name}</h2>
          <Link className="play-button" to={`/video/${videoId}`}>
            Play
          </Link>
        </div>
      </div>

      <div className="body-container">
        <p className="description">{description}</p>
        {isSeries && seasons.length > 0 && <EpisodesList seasons={seasons} />}
      </div>
    </div>
  );
}
