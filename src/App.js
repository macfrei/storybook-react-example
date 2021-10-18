import { useEffect, useState } from 'react'
import data from './data.json'
import loadFromLocal from './lib/loadFromLocal'
import saveToLocal from './lib/saveToLocal'

function App() {
  const [pokemons, setPokemons] = useState(loadFromLocal('pokemons' ?? []))

  useEffect(() => {
    saveToLocal('pokemons', pokemons)
  }, [pokemons])

  return (
    <>
      {pokemons === null ? (
        <button onClick={() => setPokemons(data)}>Show first pokemons!</button>
      ) : (
        pokemons.map(({ name, types, id }) => (
          <section key={id}>
            <p>{name}</p>
            Types:
            <ul>
              {types.map(type => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </section>
        ))
      )}
    </>
  )
}

export default App
