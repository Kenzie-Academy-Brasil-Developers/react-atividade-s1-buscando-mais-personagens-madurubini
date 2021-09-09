import "./style.css";
function CharCard({ char }) {
  const status = char.status;
  const charName = char.name;
  const limitedName = charName.substr(0, 15) + "...";

  return (
    <div className="Card">
      <div className={status}>
        {charName.length > 15 ? (
          <label>{limitedName}</label>
        ) : (
          <label>{charName}</label>
        )}

        <img src={char.image} alt={charName}></img>
        <p> Espécie: {char.species}</p>
      </div>
    </div>
  );
}

export default CharCard;
