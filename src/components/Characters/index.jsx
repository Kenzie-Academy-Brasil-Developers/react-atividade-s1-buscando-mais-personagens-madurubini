import CharCard from "../CharCard";
import "./style.css";

function Characters({ characters }) {
  return (
    <div className="Content">
      <div className="Board">
        {characters.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
