// NPM packages
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import TitleForm from "./components/TitleForm";
import { newTitle } from "./components/newContentItem";
import ContentItemsTable from "./components/ContentItemsTable";
import BackButton from "components/BackButton";
import { useContent } from "state/ContentProvider";
import { getCollection, deleteDocument } from "scripts/firestore";

export default function CategoryDetails({ match }) {
  // Global state
  const { categories, titleDispatch, modifiedDate, setModifiedDate } =
    useContent();
  const history = useHistory();

  // Local state
  const [titles, setTitles] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const [editMode, setEditMode] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(newTitle);

  // Properties
  const routerID = match.params.id;
  const currentCategory = categories.find((item) => item.id === routerID);
  const path = `categories/${currentCategory.id}/items`;

  // Methods
  const fetchData = useCallback(async (url) => {  // Need to refactor to useFetch and check data
    try {
      const titles = await getCollection(url);
      setTitles(titles);
      titleDispatch({ type: "READ_DATA", payload: titles });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData, modifiedDate]);

  async function onDelete(titleId) {
    if (window.confirm("Are you sure you want to delete a content title?")) {
      const payload = await deleteDocument(path, titleId);
      if (payload.isDeleted) {
        titleDispatch({ type: "DELETE_TITLE", payload: titleId });
        setModifiedDate(new Date());
      } else {
        window.alert("The title wasn't deleted. Please try again");
      }
    }
  }

  function onAdd() {
    setCurrentTitle(newTitle);
    setEditMode(true);
  }

  function onEdit(title) {
    setCurrentTitle(title);
    setEditMode(true);
  }

  return (
    <main className="page category-details-page">
      <header className="admin-header">
        <h1>{currentCategory.name}</h1>
        <p>Here you can add, update or delete content</p>
        {!editMode && (
          <>
            <BackButton history={history} />
            <button className="netflix-button add-new" onClick={onAdd}>
              Add title
            </button>
          </>
        )}
      </header>
      <div className="page-content">
        {!editMode ? (
          <ContentItemsTable
            contentItems={titles}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ) : (
          <TitleForm
            title={currentTitle}
            category={currentCategory}
            state={[setEditMode]}
          />
        )}
      </div>
    </main>
  );
}
