// NPM Packages
import { useState } from "react";

// Project files
// import { ParcelsList } from "../components/ParcelsList";
// import { parcelStateSelector } from "../state/parcelsData";

export const SearchResults = ({ match, history }) => {
  // State
  const sortKey = useState("titleId");
  //const titles = useRecoilValue(parcelStateSelector);
  const titles = []; // get titles here

  // Consts
  const query = match.params.query.toUpperCase();
  const filteredResults = titles.filter((item) => {
    const searchString = item.name;
    return searchString.toUpperCase().match(query);
  });
  const sortedResults = filteredResults.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );


  return (
    <div id="results" className="search-results">
      {sortedResults.length > 0 ? (
        // <TitlesList parcels={sortedResults} />
        <></>
      ) : (
        <div className="container">
          <h2 className="no-results">No results</h2>
        </div>
      )}
    </div>
  );
};