import PropTypes from "prop-types";

function Filter({ setSearchTerm, setSearched, inputRef }) {
  function handleSubmit(event) {
    event.preventDefault();
    const searchInput = event.target.firstChild.firstChild;
    setSearchTerm(searchInput.value);
    setSearched(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="search"
          id="search"
          className="p-2 border border-gray bg-gray"
          ref={inputRef}
          data-testid="search-bar"
        />
        <button type="submit" className="text-white bg-blue-600 text-sm p-2">
          Search
        </button>
      </div>
    </form>
  );
}

Filter.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setSearched: PropTypes.func,
  inputRef: PropTypes.object,
};

export default Filter;
