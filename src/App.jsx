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

// shuffle the original array
function shuffleList(array) {
  let newArray = [...array];
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

function App() {
  const [pokeList, setPokeList] = useState(sample);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenList, setChosenList] = useState([]);

  function handleClick(e) {
    const newList = shuffleList(pokeList);
    setPokeList(newList);

    // get image id
    const selected = e.target.id;
    console.log(selected);

    // add pokemon to the chosenList
    setChosenList([...chosenList, selected]);
    console.log(chosenList);

    runGame(selected);
  }

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
