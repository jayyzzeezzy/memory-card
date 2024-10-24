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

  function runGame(selected) {
    // lose condition
    if (chosenList.some((element) => element == selected)) {
      setChosenList([]);
      setScore(0);

      if (score > bestScore) {
        setBestScore(score);
      }

      // win condition
    } else if (score == sample.length - 1) {
      setChosenList([]);
      setBestScore(score + 1);
      setScore(0);
    } else {
      setScore(score + 1);
    }
  }

  const year = new Date().getFullYear();

  return (
    <>
      <div className="App">
        <div className='score'>
          <h1>Score: {score}</h1>
          <h2>Best score: {bestScore}</h2>
        </div>
      

        <div onClick={(e) => handleClick(e)} className="cards-board">
          {pokeList.map((pokemon) => (
            <Card key={pokemon} pokemon={pokemon} id={pokemon} />
          ))}
        </div>
      </div>
      <footer class="footer">
            <div class="footer-content">
                Copyright © Jayyzzeezzy
                <a href="https://github.com/jayyzzeezzy" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                {year}
            </div>
        </footer>
    </>
  )
}

export default App
