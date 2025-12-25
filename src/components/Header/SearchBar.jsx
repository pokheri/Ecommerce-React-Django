import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <CiSearch className="search-icon" />
      <div id="search">
        <input
          id="search-input"
          type="text"
          placeholder="Search products, brands and more "
        />
      </div>
    </div>
  );
};

export default SearchBar;
