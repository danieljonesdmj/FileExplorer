import PropTypes from "prop-types";

function Sort({ sortBy, setSortBy }) {
  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex flex-col w-48 mb-4">
      <h2>Sort by</h2>
      <div className="flex justify-between">
        <label>
          <input
            type="radio"
            name="sort-by"
            value="Name"
            checked={sortBy === "Name"}
            onChange={handleSort}
          />
          <span className="pl-1">Name</span>
        </label>
        <label>
          <input
            type="radio"
            name="sort-by"
            value="Date"
            checked={sortBy === "Date"}
            onChange={handleSort}
          />
          <span className="pl-1">Date</span>
        </label>
        <label>
          <input
            type="radio"
            name="sort-by"
            value="Size"
            checked={sortBy === "Size"}
            onChange={handleSort}
          />
          <span className="pl-1">Size</span>
        </label>
      </div>
    </div>
  );
}

Sort.propTypes = {
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
};

export default Sort;
