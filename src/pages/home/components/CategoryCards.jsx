// Project files
import { useContent } from "state/ContentProvider";
import List from "components/List";
import Card from "./Card";

export default function CategoryCards({ category, setModal }) {
  // Global state
  const { titles } = useContent();

  // Derived state
  const categoryItems = titles.filter((items) => items.type === category);

  return (
    <div className="category-cards">
      <h2 className="cards-header">{category}</h2>
      <List Component={Card} list={categoryItems} setModal={setModal} />
    </div>
  );
}
