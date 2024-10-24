import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const sample = [
  "ditto",
  "mewtwo",
  "squirtle",
  "bulbasaur",
  "charmander",
  "pikachu",
];

function App() {
  const [pokeList, setPokeList] = useState(sample);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenList, setChosenList] = useState([]);

  

  return (
    <>
      <div className="App">
        <h1>Score: {score}</h1>
        <h2>Best score: {bestScore}</h2>

        <div onClick={(e) => handleClick(e)} className="cards-board">
          {pokeList.map((pokemon) => (
            <Card key={pokemon} pokemon={pokemon} id={pokemon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
