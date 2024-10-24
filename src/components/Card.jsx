import { useState, useEffect } from "react";

function Card({ pokemon, id }) {
  const [img, setImg] = useState("");

  async function getPokemonPic() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        {
          mode: "cors",
        }
      );
      const pokemonData = await response.json();
      const pokemonPicUrl =
        pokemonData.sprites.other["official-artwork"]["front_default"];
      setImg(pokemonPicUrl);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemonPic();
  }, []);

  return (
    <>
      <div className="card-wrap">
        <img src={img} alt={pokemon} id={id} />
      </div>
    </>
  );
}

export default Card;