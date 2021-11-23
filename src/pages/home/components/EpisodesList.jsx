// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import SeasonsSelect from "./SeasonsSelect";

export default function EpisodesList({ seasons }) {
  // Local state
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState(getEpisodes(season));

  // Methods
  function getEpisodes(newSeason) {
    return seasons.find((item) => item.seasonNumber === newSeason)?.episodes;
  }

  function changeSeason(newSeason) {
    setSeason(newSeason);
    setEpisodes(getEpisodes(newSeason));
  }

  // Components
  const Episodes = episodes.map((episode, index) => {
    return (
      <Link
        className="episode-row"
        key={index}
        to={`/video/${episode.videoId}`}
      >
        <p className="episode-number">{episode.number}</p>
        <div className="episode-thumb">
          <img src={episode.thumbUrl} alt="Episode thumbnail" />
        </div>
        <div className="episode-info">
          <h2>{episode.name}</h2>
          <p>{episode.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="episodes-list">
      <div className="episodes-control">
        <h2>Episodes</h2>
        <SeasonsSelect seasons={seasons} onChange={changeSeason} />
      </div>
      {Episodes}
    </div>
  );
}
