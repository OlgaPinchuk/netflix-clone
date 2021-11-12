// Project files
import ContentItemsTable from "./ContentItemsTable";
import { useContent } from "state/ContentProvider";
import { updateDocument } from "scripts/fireStore";

export default function SeasonTable({ data, onEdit, onDelete }) {
  // Properties
  const [season, series] = data;
  const [seasonNumber, content] = season;
  const episodes = getEpisodes(content);

  // Global state
  const { categories, setModifiedDate } = useContent();

  // Methods
  function getEpisodes(data) {
    let episodes = [];
    for (const [key, value] of Object.entries(data.episodes)) {
      episodes.push({ ...value, episodeNumber: key });
    }
    return episodes;
  }

  function deleteEpisode(items, id) {
    return items.filter((item) => item.id !== id);
  }

  async function onDelete(episodeId) {
    if (window.confirm("Are you sure you want to delete an episode?")) {
      const seriesCategoryId = categories.find(
        (item) => item.name === "Series"
      ).id;
      const path = `categories/${seriesCategoryId}/items`;
      const newEpisodes = deleteEpisode(episodes, episodeId);
      const editedSeries = {
        ...series,
        seasons: {
          ...series.seasons,
          [seasonNumber]: {
            ...series.seasons[seasonNumber],
            episodes: {
              ...newEpisodes,
            },
          },
        },
      };
      await updateDocument(path, series.id, editedSeries);

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
