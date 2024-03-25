import PropTypes from "prop-types";

function Filter({ setSearchTerm, setSearched, inputRef }) {
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(event.target[0].value);
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
