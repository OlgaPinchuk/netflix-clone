// NPM packages
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import TitleForm from "./TitleForm";
import newTitle from "./newTitle";
import TitlesTable from "./TitlesTable";
import BackButton from "components/BackButton";
import { useContent } from "state/ContentProvider";
import { getCollection, deleteDocument } from "scripts/fireStore";

export default function CategoryDetails({ match }) {
  // Global state
  const { categories, titleDispatch } = useContent();
  const history = useHistory();

  // Local state
  const [titles, setTitles] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const [editMode, setEditMode] = useState(false);

  // Properties
  const routerID = match.params.id;

  const { id, name: categoryName } = categories.find(
    (item) => item.id === routerID
  );

  const path = `categories/${id}/items`;

  const currentTitle = getTitle(titles, id);

  // Methods
  const fetchData = useCallback(async (url) => {
    try {
      const titles = await getCollection(url);

      setTitles(titles);
      titleDispatch({ type: "READ_TITLE", payload: titles });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  function getTitle(titles, id) {
    const existingTitle = titles.find((item) => item.id === id);
    return existingTitle ?? newTitle;
  }

  async function onDelete(titleId) {
    const path = `categories/${id}/items`;
    if (window.confirm("Are you sure you want to delete a content title?")) {
      await deleteDocument(path, titleId);
      titleDispatch({ type: "DELETE_TITLE", payload: titleId });
      history.goBack();
    }
  }

  return (
    <main className="page category-details-page">
      <header className="admin-header">
        <h1>{categoryName}</h1>
        <p>Here you can add, update or delete content</p>
        <BackButton history={history} />
        <button
          className="netflix-button add-new"
          onClick={() => setEditMode(true)}
        >
          Add title
        </button>
      </header>
      <div className="page-content">
        {!editMode ? (
          <TitlesTable
            titles={titles}
            onDelete={onDelete}
            onEdit={() => setEditMode(true)}
          />
        ) : (
          <TitleForm title={currentTitle} id={currentTitle.id} />
        )}
      </div>
    </main>
  );
}
