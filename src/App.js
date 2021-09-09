import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <h1>Rick and Morty API 2.0</h1>
      <p>
        O que já era bom ficou ainda melhor, agora você pode ter acesso a todos
        os personagens de Rick and Morty, navegue com os botões de paginação
        abaixo :D
      </p>
      <div className="Container">
        <Characters characters={characterList} />
      </div>
      <div className="Botoes">
        <button onClick={previousPage}>
          <IoMdSkipBackward className="Icone" />
          Back
        </button>
        <p>{page}</p>
        <button onClick={nextPage}>
          <IoMdSkipForward className="Icone" />
          Next
        </button>
      </div>
      <p className="Link">
        Consuma essa API{" "}
        <a href="https://rickandmortyapi.com/api/character/">Clicando AQUI</a>
      </p>
    </div>
  );
}

export default App;
