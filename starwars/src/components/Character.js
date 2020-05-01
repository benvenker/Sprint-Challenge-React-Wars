// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";

import { SearchResultCard } from "./SearchResultCard";

const Character = (props) => {
  console.log("character props: ", props);
  const [character, setCharacter] = useState({
    id: 0,
    name: "",
    satus: "",
    type: "",
    gender: "",
    episode: [],
    origin: {
      name: "",
      url: "",
    },
  });

  const id = props.match.params.id;

  console.log("character: ", character);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => setCharacter(data));
  }, []);

  const episodes = character.episodes;
  const origin = character.origin.name;

  console.log(origin);

  return (
    <div className="character-page">
      <SearchResultCard result={character} />
    </div>
  );
};

export default Character;
