import { Buttom } from "./components/Buttom"
import { Card } from "./components/Card";
import "./sass/App.scss"
import { useState } from "react"

function App() {

  const [pokemonId, setPokemonId] = useState(1);

  const resPoke = () =>
    (pokemonId === 1) ?
      setPokemonId(1) :
      setPokemonId(pokemonId - 1);

  const sumaPoke = () =>
    setPokemonId(pokemonId + 1);

  return (
    <>
    <div className="container">
      <div className="container-card">
        <Card />
      </div>
      <div className="container-btn">
        <Buttom
          icon="<"
          onClick={resPoke}
        />
        {pokemonId}
        <Buttom
          icon=">"
          onClick={sumaPoke}
          />
      </div>
    </div>
    </>
  )
}

export { App }
