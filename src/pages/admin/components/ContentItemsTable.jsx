// NPM packages
import { Link } from "react-router-dom";

// Project files
import EditButton from "components/EditButton";
import DeleteButton from "components/DeleteButton";

export default function ContentItemsTable({ contentItems, onDelete, onEdit }) {
  //Properties
  const isEpisode =
    contentItems.length &&
    contentItems.some((item) => item.hasOwnProperty("episodeNumber"));

  // Components
  const ItemsRows = contentItems.map((item) => {
    const itemToDelete = isEpisode ? item.episodeNumber : item.id;
    return (
      <tr key={item.id}>
        {isEpisode ? <td>{item.episodeNumber}</td> : null}
        <td>
          <img className="thumb" src={item.thumbUrl} alt={item.name} />
        </td>
        <td><b>{item.name}</b></td>
        <td>{item.description}</td>
        <td className="admin-buttons">
          <EditButton onClick={() => onEdit(item)} />
          <DeleteButton onClick={() => onDelete(itemToDelete)} />
          {item.type === "Series" && (
            <Link to={`/series/${item.id}`}>View seasons</Link>
          )}
        </td>
      </tr>
    );
  });

  if (!contentItems.length)
    return <h2 className="no-content-message">No content yet</h2>;

  return (
    <table className="admin-table content-items-table">
      <thead>
        <tr>
          {isEpisode ? <th>Episode #</th> : null}
          <th>Thumb</th>
          <th className="item-name">Name</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{ItemsRows}</tbody>
    </table>
  );
}
