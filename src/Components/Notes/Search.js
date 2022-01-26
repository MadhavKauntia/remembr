import styles from "./Search.module.css";
import { MdSearch } from "react-icons/md";

const Search = (props) => {
  return (
    <div className={styles.search}>
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => props.handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
