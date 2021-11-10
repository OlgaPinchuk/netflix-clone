// Project files
import EditButton from "components/EditButton";
import DeleteButton from "components/DeleteButton";

export default function TitlesTable({ titles, onDelete, onEdit }) {

  // Components
  const TitleRows = titles.map((title) => {
    return (
      <tr key={title.id}>
        <td>
          <img className="thumb" src={title.thumbUrl} alt={title.name} />
        </td>
        <td>{title.name}</td>
        <td>{title.description}</td>
        <td>
          <EditButton onClick={() => onEdit(title)} />
          <DeleteButton onClick={() => onDelete(title.id)} />
        </td>
      </tr>
    );
  });

  return (
    <table className="admin-table titles-table">
      <thead>
        <tr>
          <th>Thumb</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{TitleRows}</tbody>
    </table>
  );
}
