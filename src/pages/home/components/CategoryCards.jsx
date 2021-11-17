// Project files
import useFetch from "hooks/useFetch";
import List from "components/List";
import Card from "./Card";

export default function CategoryCards({ category, setModal }) {
  // Properties
  const { name, id } = category;
  const path = `categories/${id}/items`;

  //Fetching data
  const { status, data } = useFetch(path);

  return (
    <>
      {status === 1 && (
        <div className="category-cards">
          <h2 className="cards-header">{name}</h2>
          <List Component={Card} list={data} setModal={setModal} />
        </div>
      )}
    </>
  );
}
