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

  // Good refactoring of the useFetch +5

  // safeguards
  if (status === 0) return <p>loading</p>;
  if (status === 2) return <p>error</p>;

  return (
    <main className="page home-page">
      {/* But here you could have done some polishing see example above  -1 */}
      {/* This would remove the nesting and the need for the <> */}
      {status === 1 && (
        <>
          <Hero />
          <div className="user-content">
            {categories.map((item) => (
              <CategoryCards
                key={item.id}
                category={item}
                setModal={setModal}
              />
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      <Modal state={[modal, setModal]} />
    </main>
  );
}
