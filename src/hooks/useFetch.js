// NPM Packages
import { useState, useEffect, useCallback } from "react";
import { getCollection } from "scripts/firestore";

export default function useFetch(path, dispatch) {
  const [status, setStatus] = useState(0); // 0 - loading, 1 - loaded, 2 - error
  const [data, setData] = useState([]);

  //Methods
  const fetchData = useCallback(async (path) => {
    try {
      const data = await getCollection(path);
      if (dispatch) {
        dispatch({ type: "READ_DATA", payload: data });
      }
      setStatus(1);
      setData(data);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  return { data, status };
}
