// Project files
import ContentItemsTable from "./ContentItemsTable";
import { useContent } from "state/ContentProvider";
import { deleteDocumentField } from "scripts/firestore";

export default function SeasonTable({ seriesData, onEdit }) {

  // Global state
  const { categories, setModifiedDate } = useContent();

  // Properties
  const [season, seriesId] = seriesData;
  const{seasonNumber, episodes} = season;

  // Methods

  async function onDelete(episodeId) {
    if (window.confirm("Are you sure you want to delete an episode?")) {
      const seriesCategoryId = categories.find(
        (item) => item.name === "series"
      ).id;
      const path = `categories/${seriesCategoryId}/items`;
      const fieldToDelete =
        episodes.length > 1
          ? `seasons.${seasonNumber}.episodes.${episodeId}`
          : `seasons.${seasonNumber}`;

      await deleteDocumentField(path, seriesId, fieldToDelete);

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
