import { useState } from "react";
import data from "../../assets/data.json";
import File from "../File/File";
import Sort from "../Sort/Sort";

function Display() {
  const [sortBy, setSortBy] = useState("Name");
  const sortedByName = data.slice().sort((a, b) => (a.name < b.name ? -1 : 1));
  const sortedByDate = data
    .slice()
    .sort((a, b) => (a.added < b.added ? -1 : 1));
  const sortedBySize = data
    .slice()
    .sort((a, b) =>
      Number(a.size.slice(0, -2)) < Number(b.size.slice(0, -2)) ? -1 : 1
    );

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

  return (
    <div className="m-10">
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <ul>
        {files.map((file, index) => (
          <File key={index} file={file} />
        ))}
      </ul>
    </div>
  );
}

export default Display;
