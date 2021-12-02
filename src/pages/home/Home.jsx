// NPM packages
import { useState, useMemo, useEffect } from "react";

// Project files
import Modal from "components/Modal";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import { useContent } from "state/ContentProvider";
import useFetch from "hooks/useFetch";

export default function Home() {
  // Global state
  const { titles, titleDispatch } = useContent();

  // Local state
  const [modal, setModal] = useState(null);

  // Data fetching
  const { status } = useFetch("titles", titleDispatch);

  // Derived state
  const categories = useMemo(
    () => [...new Set(titles.map((item) => item.type))],
    [titles]
  );

  // Components
  const Categories = categories.map((item, index) => (
    <CategoryCards key={index} category={item} setModal={setModal} />
  ));

  return (
    <main className="page home-page">
      {/* TO-DO: move Loading and Error to components */}
      {status === 0 && <p>Loading...</p>}
      {status === 2 && <p>Error...</p>}
      {status === 1 && (
        <>
          <Hero />
          <div className="user-content">{Categories}</div>
        </>
      )}

      {/* Modal */}
      <Modal state={[modal, setModal]} />
    </main>
  );
}
