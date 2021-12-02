// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import TitleForm from "./components/TitleForm";
import { newTitle } from "./components/newContentItem";
import ContentItemsTable from "./components/ContentItemsTable";
import BackButton from "components/BackButton";
import { useContent } from "state/ContentProvider";
import { deleteDocument } from "scripts/firestore";

export default function CategoryDetails({ match }) {
  // Global state
  const { titles, titleDispatch, setModifiedDate } = useContent();
  const history = useHistory();

  // Local state
  const [editMode, setEditMode] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(newTitle);

  // Properties
  const currentCategory = match.params.name;
  const categoryItems = titles.filter(
    (item) => item.type === currentCategory
  );

  // Methods
  async function onDelete(titleId) {
    if (window.confirm("Are you sure you want to delete a content title?")) {
      const payload = await deleteDocument("titles", titleId);
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
        <h1>{currentCategory}</h1>
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
            contentItems={categoryItems}
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
