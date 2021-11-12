// NPM packages
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import SeriesForm from "./components/SeriesForm";
import newEpisode from "./components/newEpisode";
import SeasonTable from "./components/SeasonTable";
import BackButton from "components/BackButton";
import { useContent } from "state/ContentProvider";
import {
  getCollection,
  deleteDocument,
  updateDocument,
} from "scripts/fireStore";

export default function SeriesDetails({ match }) {
  // Global state
  const history = useHistory();
  const { categories, titles, setModifiedDate } = useContent();
  const currentSeries = titles.find((item) => item.id === match.params.id);

  // Local state
  const [seasons, setSeasons] = useState(currentSeries.seasons);
  const [currentEpisode, setCurrentEpisode] = useState(newEpisode);
  const [editMode, setEditMode] = useState(false);

  // Properties
  // const seriesCategoryId = categories.find((item) => item.name === "Series").id;
  //const path = `categories/${currentSeries.id}/items`;

  // Components
  const Seasons = Object.entries(seasons).map((season, index) => (
    <SeasonTable
      key={index}
      data={[season, currentSeries]}
      onEdit={() => {}}
    />
  ));

  // Methods


  function onAdd() {
    setEditMode(true);
  }

  async function onDelete(episodeId) {
    if (window.confirm("Are you sure you want to delete an episode?")) {
      const path = `categories/${currentSeries.id}/items`;
      // const editedSeries = {
      //   ...currentSeries,
      //   seasons: {
      //     ...currentSeries.seasons,
      //     [form.season]: {
      //       ...series.seasons[form.season],
      //       episodes: {
      //         ...series.seasons[form.season].episodes,
      //         [form.episodeNumber]: { ...editedEpisode },
      //       },
      //     },
      //   },
      // };
      // const payload = await updateDocument(path, editedEpisode);
      // if (payload.isDeleted) {
      //   titleDispatch({ type: "DELETE_TITLE", payload: titleId });
      //   setModifiedDate(new Date());
      // } else {
      //   window.alert("The title wasn't deleted. Please try again");
      // }
    }
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
          <>{Seasons}</>
        ) : (
          <SeriesForm
            episode={currentEpisode}
            series={currentSeries}
            state={[setEditMode]}
          />
        )}
      </div>
    </main>
  );
}
