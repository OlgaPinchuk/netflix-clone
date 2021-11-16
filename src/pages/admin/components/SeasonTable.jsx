// Project files
import ContentItemsTable from "./ContentItemsTable";
import { useContent } from "state/ContentProvider";
import { deleteDocumentField } from "scripts/firestore";

export default function SeasonTable({ seriesData, onEdit }) {
  // Global state
  const { categories, setModifiedDate } = useContent();

  // Properties
  const [season, series] = seriesData;
  const [seasonNumber, content] = season;
  const episodes = getEpisodes(content);
  // const [setEditMode, setCurrentEpisode] = state;

  // Methods
  function getEpisodes(data) {
    let episodes = [];
    for (const [key, value] of Object.entries(data.episodes)) {
      episodes.push({ ...value, episodeNumber: key });
    }
    return episodes;
  }

  async function onDelete(episodeId) {
    if (window.confirm("Are you sure you want to delete an episode?")) {
      const seriesCategoryId = categories.find(
        (item) => item.name === "Series"
      ).id;
      const path = `categories/${seriesCategoryId}/items`;
      const fieldToDelete =
        episodes.length > 1
          ? `seasons.${seasonNumber}.episodes.${episodeId}`
          : `seasons.${seasonNumber}`;

      await deleteDocumentField(path, series.id, fieldToDelete);

      setModifiedDate(new Date());
    }
  }

  return (
    <div className="season-details">
      <h2>Season {seasonNumber}</h2>
      <ContentItemsTable
        contentItems={episodes}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
}
