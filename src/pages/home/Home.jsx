// NPM packages
import { Link } from "react-router-dom";

// Project files
import Hero from "./components/Hero";
import Video from "components/Video";
import CategoryCards from "./components/CategoryCards";
import { useContent } from "state/ContentProvider";
import { getRandomItem, getTitlesByCategory } from "scripts/utils/utils";
import useFetch from "hooks/useFetch";

export default function Home() {
  // Global state
  const { categories, titles, categoryDispatch, titleDispatch } = useContent();

  // Properties
  const categoriesPath = "categories";

  // Data fetching
  const { status } = useFetch(categoriesPath, categoryDispatch);

  // const movies = useFetch(`categories/${categories[0].id}/items`);
  // console.log("path", `categories/${categories[0].id}/items`);
  //  console.log("movies", movies);

  return (
    <main className="page home-page">
      <Hero/>
      <Video/>
      {status === 1 && 
      <div className="user-content">
      <CategoryCards category={categories[0]} />
      <CategoryCards category={categories[1]} />
      <CategoryCards category={categories[2]} />
      </div>}
    </main>
  );
}
