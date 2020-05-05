import React, { useEffect, useState } from "react";
import axios from "axios";

const Episode = (props) => {
  const [episode, setEpisode] = useState(0);

  console.log("Episode props", props);
  const id = Number(props.episode.match(/[0-9]/g).join(""));

  useEffect(() => {
    console.log({ id });
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => response.data)
      .then((data) => setEpisode(data));
  }, []);

  return (
    <tr>
      <td className="character-image">
        <a href={`https://rickandmorty.fandom.com/wiki/${episode.name}`}>
          {episode.name}
        </a>
      </td>
      <td>{episode.episode}</td>
      <td>{episode.air_date}</td>
    </tr>
  );
};

export default Episode;
