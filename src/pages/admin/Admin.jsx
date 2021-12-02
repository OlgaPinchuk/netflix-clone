// NPM packages
import { useMemo } from "react";
import { Link } from "react-router-dom";

// Project files
import { useContent } from "state/ContentProvider";
import useFetch from "hooks/useFetch";

export default function Admin() {
  // // Global state
  // const { categories, categoryDispatch } = useContent();
  // Global state
  const { titles, titleDispatch } = useContent();

  // Data fetching
  const { status } = useFetch("titles", titleDispatch);

  // Derived state
  const categories = useMemo(
    () => [...new Set(titles.map((item) => item.type))],
    [titles]
  );

  // Local state
  // const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Methods
  // const fetchData = useCallback(async (path) => {
  //   try {
  //     const data = await getCollection(path);

  //     categoryDispatch({ type: "READ_DATA", payload: data });
  //     setStatus(1);
  //   } catch {
  //     setStatus(2);
  //   }
  // }, []);

  // useEffect(() => fetchData("categories"), [fetchData]); // Need to refactor to useFetch and check data

  // // Data fetching
  // const { status } = useFetch("titles", titleDispatch);

  const CategoriesList = categories.map((item, index) => (
    <Link
      to={"/admin-categories/" + item}
      className="category-card"
      key={index}
    >
      <h3>{item}</h3>
    </Link>
  ));

  return (
    <main className="page admin-page">
      <header className="admin-header">
        <h1>Administration Page</h1>
        <p>Welcome to Netflix admin page!</p>
        <p>Here you can add, update or delete the content titles</p>
      </header>
      <div className="page-content">
        <h2>Content categories</h2>
        <p className="instruction">
          Below you can choose the category to view or update
        </p>
      <div className="categories"> {CategoriesList}</div>
      </div>
    </main>
  );
}
