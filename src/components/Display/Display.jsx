import data from "../../assets/data.json";
import File from "../File/File";

function Display() {
  return (
    <div>
      <ul>
        {data.map((file, index) => (
          <File key={index} name={file.name} type={file.type} />
        ))}
      </ul>
    </div>
  );
}

export default Display;
