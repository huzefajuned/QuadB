import { useState, useContext } from "react";
// Context
import ShowsContext from "../../context/shows/showsContext";

import styles from "../Searchbar/Searchbar.module.css";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      alert("Invalid Inputs...");
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Search Show"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button className="btn btn-block" onClick={onSearchHandler}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
