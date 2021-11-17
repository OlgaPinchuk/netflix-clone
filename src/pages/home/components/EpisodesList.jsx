// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
// import { isEmptyObject } from "scripts/utils/utils";
import SeasonsSelect from "./SeasonsSelect";

export default function EpisodesList({ title }) {
  // Local state
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState(getSeasonEpisodes(season));

  // Methods
  function changeSeason(newSeason) {
    setSeason(newSeason);
    setEpisodes(getSeasonEpisodes(newSeason));
  }

  function getSeasonEpisodes(newSeason) {
    return Object.values(title.seasons[newSeason].episodes);
  }

  const Episodes = episodes.map((episode, index) => {
    return (
      <Link className="episode-row" key={index} to={`/video/${episode.videoId}`}>
        <p className="episode-number">{index + 1}</p>
        <div className="episode-thumb">
          <img src={episode.thumbUrl} alt="" />
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
        <SeasonsSelect data={title.seasons} onChange={changeSeason} />
      </div>
      {Episodes}
    </div>
  );
}
