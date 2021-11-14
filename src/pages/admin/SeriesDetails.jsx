// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import EpisodeForm from "./components/EpisodeForm";
import SeasonTable from "./components/SeasonTable";
import BackButton from "components/BackButton";
import { newEpisode } from "./components/newContentItem";
import { useContent } from "state/ContentProvider";
import { isEmptyObject } from "scripts/utils/utils";

export default function SeriesDetails({ match }) {
  // Global state
  const history = useHistory();
  const { titles } = useContent();
  const currentSeries = titles.find((item) => item.id === match.params.id);

  // Local state
  const [seasons, setSeasons] = useState(currentSeries.seasons);
  const [currentEpisode, setCurrentEpisode] = useState(newEpisode);
  const [editMode, setEditMode] = useState(false);

  // Components
  const Seasons = Object.entries(seasons).map((season, index) => (
    <SeasonTable
      key={index}
      seriesData={[season, currentSeries]}
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
          isEmptyObject(currentSeries.seasons) ? (
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
