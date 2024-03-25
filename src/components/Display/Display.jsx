import { useState, useRef } from "react";
import data from "../../assets/data.json";
import File from "../File/File";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";

const sortedByName = data.slice().sort((a, b) => (a.name < b.name ? -1 : 1));
const sortedByDate = data.slice().sort((a, b) => (a.added < b.added ? -1 : 1));
const sortedBySize = data
  .slice()
  .sort((a, b) =>
    Number(a.size.slice(0, -2)) < Number(b.size.slice(0, -2)) ? -1 : 1
  );

function Display() {
  const [sortBy, setSortBy] = useState("Name");
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const searchInputRef = useRef(null);

  let files;

  switch (sortBy) {
    case "Name":
      files = sortedByName;
      break;
    case "Date":
      files = sortedByDate;
      break;
    case "Size":
      files = sortedBySize;
      break;
  }

  files = files.filter((file) => {
    return file.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleClick(event) {
    event.preventDefault;
    setSearched(false);
    setSearchTerm("");
    searchInputRef.current.value = "";
  }

  return (
    <div className="m-10">
      <div className="flex justify-between mb-10">
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <Filter
          setSearchTerm={setSearchTerm}
          setSearched={setSearched}
          inputRef={searchInputRef}
        />
      </div>
      <ul className="mb-8">
        {files.length > 0
          ? files.map((file, index) => <File key={index} file={file} />)
          : "No files found"}
      </ul>
      {searched && searchTerm !== "" && (
        <button
          onClick={handleClick}
          type="button"
          className="text-white bg-blue-600 p-2 text-sm"
        >
          Show all
        </button>
      )}
    </div>
  );
}

export default Display;
