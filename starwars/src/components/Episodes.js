import React from "react";
import styled from "styled-components";
import Episode from "./Episode";

const EpisodesStyles = styled.div`
  .episodes {
    background-color: white;
  }
  th {
    text-align: left;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:hover {
    background-color: #ddd;
  }

  .episode-name {
    min-width: 300px;
  }

  .episode-code {
    min-width: 100px;
  }
`;

const Episodes = ({ episodes }) => {
  console.log("Episodes props", episodes);
  return (
    <EpisodesStyles>
      <div className="episodes">
        <table>
          <tbody>
            <tr className="row">
              <th className="table-column episode-name">Name</th>
              <th className="table-column episode-code">Episode</th>
              <th className="table-column episode-air-date">Air Date</th>
            </tr>
            {episodes.map((episode, i) => {
              return <Episode key={i} episode={episode} />;
            })}
          </tbody>
        </table>
      </div>
    </EpisodesStyles>
  );
};

export { Episodes };
