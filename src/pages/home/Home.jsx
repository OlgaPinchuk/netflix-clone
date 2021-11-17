// NPM packages
import { useState } from "react";

// Project files
import Modal from "components/Modal";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import { useContent } from "state/ContentProvider";
import useFetch from "hooks/useFetch";

export default function Home() {
  // Global state
  const { categories, categoryDispatch } = useContent();

  // Local state
  const [modal, setModal] = useState(null);

  // Properties
  const categoriesPath = "categories";

  // Data fetching
  const { status } = useFetch(categoriesPath, categoryDispatch);

  return (
    <main className="page home-page">
      <Hero />

      {status === 1 && (
        <div className="user-content">
          {categories.map((item) => (
            <CategoryCards key={item.id} category={item} setModal={setModal} />
          ))}
        </div>
      )}

      {/* Modal */}
      <Modal state={[modal, setModal]} />
    </main>
  );
}
