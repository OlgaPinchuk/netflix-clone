// NPM packages
import { useParams, useHistory } from "react-router-dom";

// Project files
import TitleForm from "./TitleForm";
import newTitle from "./newTitle";
import { useTitle } from "state/TitleProvider";

export default function Admin() {
  // Global state
  const { titles, titleDispatch } = useTitle();
  const { id } = useParams();
  const history = useHistory();

  // Properties
  const currentTitle = getTitle(titles, id);
  const initialMode = id === "new-title";

  // Methods
  function getTitle(titles, id) {
    const oldTitle = titles.find((item) => item.slug === id);
    return oldTitle ?? newTitle;
  }

  return (
    <main className="page admin-page">
      <header className="admin-header">
        <h1>Administration Page</h1>
        <p>Here you can add, update or delete the content titles</p>
      </header>

      <TitleForm title={currentTitle} id={currentTitle.id} />
    </main>
  );
}
