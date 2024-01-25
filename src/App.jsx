import { useState, useEffect } from "react"
import { Button } from "./components/Button"
import { Card } from "./components/Card";
import "./sass/App.scss"

function App() {

  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonsEvolutions, setPokemonsEvolutions] = useState([]);

  function getEvolutions(id) {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`).then(response => response.json()).then(data => {

      let pokemonEvoArray = [];

      let pokemonLv1 = data.chain.species.name
      let pokemonLv1Img = getPokemonImages(pokemonLv1)
      pokemonEvoArray.push([pokemonLv1, pokemonLv1Img])

      if (data.chain.evolves_to.length !== 0) {
        let pokemonLv2 = data.chain.evolves_to[0].species.name;
        let pokemonLv2Img = getPokemonImages(pokemonLv2)
        pokemonEvoArray.push([pokemonLv2, pokemonLv2Img])

        if (data.chain.evolves_to[0].evolves_to.length !== 0) {
          let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
          let pokemonLv3Img = getPokemonImages(pokemonLv3)
          pokemonEvoArray.push([pokemonLv3, pokemonLv3Img])
          setPokemonsEvolutions(pokemonEvoArray)
        }
      }
    })
  }

  useEffect(() => {
    getEvolutions(pokemonId);
  }, [pokemonId])


  async function getPokemonImages(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data.sprites.other["official-artwork"].front_default;
  }


  const resPoke = () =>
    (pokemonId === 1) ?
      setPokemonId(1) :
      setPokemonId(pokemonId - 1);


  const sumaPoke = () =>
    setPokemonId(pokemonId + 1);

    console.log(pokemonsEvolutions)

  return (
    <>
      <div className="container">
        <div className="container-card">
          {pokemonsEvolutions.map(pokemon =>
            <Card
              key={pokemon}
              name={pokemon[0]}
              img={pokemon[1]}
            />
          )}
        </div>
        <div className="container-btn">
          <Button
            icon="<"
            onClick={resPoke}
          />
          { }
          <Button
            icon=">"
            onClick={sumaPoke}
          />
        </div>
      </div>
    </>
  )
}



export { App }
