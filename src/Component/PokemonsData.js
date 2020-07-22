import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPokemons, searchPokemons } from "../Actions/pokemon";
import Spinner from "../Component/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokemonCard from "../Component/PokemonCard";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../css/pokemon.css";

const PokemonsData = ({
  fetchPokemons,
  searchPokemons,
  pokemon: { pokemons, loading },
}) => {
  const [searchword, setsearchword] = useState("");

  const searchChange = (e) => {
    searchPokemons(e.target.value);

    setsearchword(e.target.value);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="pokemon_background">
        <Container fluid="md">
          <Row>
            <Col>
              <InputGroup
                className="mb-4 mx-auto mt-3"
                style={{ width: "600px" }}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Search Pokemon by Name
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  placeholder="Enter Pokemon Name"
                  onChange={searchChange}
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          {pokemons.length === 0 && !loading ? (
            <div className="text-center mt-5 pb-5">
              <h5>
                <img src="https://img.icons8.com/color/48/000000/error.png" />{" "}
                Not Found
              </h5>
              <h5 className="mt-3">
                No Pokemon belongs to <strong>"{searchword}"</strong> Name
              </h5>
            </div>
          ) : (
            <Row lg={3} md={2} sm={1}>
              {pokemons.map((pokemon) => (
                <Col key={pokemon.name}>
                  <PokemonCard className="" pokemon={pokemon} />
                  <p>{pokemon.id}</p>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </Fragment>
  );
};

PokemonsData.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps, { fetchPokemons, searchPokemons })(
  PokemonsData
);
