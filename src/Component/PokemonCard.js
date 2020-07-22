import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../css/pokemonCard.css";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon: { url } }) => {
  const [pdata, setPdata] = useState({});
  useEffect(() => {
    async function pokemonDetail(url) {
      const res = await axios.get(url);
      const data = res.data;
      await setPdata(data);
    }

    pokemonDetail(url);
  }, []);

  return (
    <div>
      <Link to={{ pathname: "/pokemon", pokemonUrl: url }}>
        <Card className="text-center pokemon_card">
          <Card.Img
            variant="top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pdata.order}.png`}
          />
          <Card.Body>
            <Card.Title>
              <strong>Pokemon: </strong>
              {pdata.name}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default PokemonCard;
