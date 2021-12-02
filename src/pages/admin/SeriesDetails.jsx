// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import EpisodeForm from "./components/EpisodeForm";
import SeasonTable from "./components/SeasonTable";
import BackButton from "components/BackButton";
import { newEpisode } from "./components/newContentItem";
import { useContent } from "state/ContentProvider";
import useFetch from "hooks/useFetch";

export default function SeriesDetails({ match }) {
  // Global state
  const history = useHistory();
  const { titles } = useContent();
  const currentSeries = titles.find((item) => item.id === match.params.id);

  // Local state
  const [currentEpisode, setCurrentEpisode] = useState(newEpisode);
  const [editMode, setEditMode] = useState(false);

  //Fetched seasons
  const { data: seasons } = useFetch(`titles/${currentSeries.id}/seasons`);

  // Components
  const Seasons = seasons
    .sort((a, b) => a.seasonNumber - b.seasonNumber)
    .map((season) => (
      <SeasonTable
        key={season.id}
        seriesData={[season, currentSeries.id]}
        onEdit={onEdit}
      />
    ));

  // Methods
  function onAdd() {
    setCurrentEpisode(newEpisode);
    setEditMode(true);
  }

  function onEdit(episodeId) {
    setCurrentEpisode(episodeId);
    setEditMode(true);
  }

  return (
    <main className="page series-details-page">
      <header className="admin-header">
        <h1>{currentSeries.name}</h1>
        <p>Here you can add, update or delete episodes</p>
        {!editMode && (
          <>
            <BackButton history={history} />
            <button className="netflix-button add-new" onClick={onAdd}>
              Add Episode
            </button>
          </>
        )}
      </header>
      <div className="page-content">
        {!editMode ? (
          seasons.length === 0 ? (
            <h2 className="no-content-message">No content yet</h2>
          ) : (
            <>{Seasons}</>
          )
        ) : (
          <EpisodeForm
            episode={currentEpisode}
            series={currentSeries}
            state={[setEditMode]}
          />
        )}
      </div>
    </main>
  );
}
