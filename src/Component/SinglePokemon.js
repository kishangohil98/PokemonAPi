import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "../css/singlePokemon.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "../Component/Spinner";
import Badge from "react-bootstrap/Badge";
import { useHistory, Link } from "react-router-dom";

const SinglePokemon = (props) => {
  const [url, setUrl] = useState(props.location.pokemonUrl);
  //const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");
  const [pdata, setPdata] = useState({});

  const history = useHistory();

  useEffect(() => {
    setUrl(props.location.pokemonUrl);

    async function pokemonDetail(url) {
      const res = await axios.get(url);
      const data = res.data;
      await setPdata(data);
      console.log("Function complete");
    }

    //console.log(props.location.pokemonUrl);
    if (props.location.pokemonUrl) {
      pokemonDetail(url);
    } else {
      console.log("else condition called");
      history.push("/");
    }
  }, []);

  {
    return pdata.name ? (
      <Fragment>
        <div className="single_pbackground">
          <Container>
            <Link to="/" className="goback">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left-2.png" />{" "}
              Go Back
            </Link>

            <div className="single_card mt-2">
              <Row lg={2} md={1} sm={1} xs={1}>
                <Col className="d-flex justify-content-center">
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pdata.order}.png`}
                    roundedCircle
                    width="500px"
                    //className="poke_Img"
                  />
                </Col>
                <Col>
                  <div className="poke_desciption">
                    <h2>{pdata.name}</h2>
                    <p className="mb-1">Abilities:</p>
                    <h6>
                      {pdata.abilities.map((abi) => (
                        <Badge className="mr-1" variant="primary">
                          {abi.ability.name}
                        </Badge>
                      ))}
                    </h6>
                    <p>
                      Weight: <strong>{pdata.weight}</strong> Kg
                    </p>
                    <p>
                      Height: <strong>{pdata.height}</strong> Unit
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* <p>Single p</p>
      <p>{url}</p>
      <p>{pdata.weight}</p> */}
      </Fragment>
    ) : (
      <Spinner />
    );
  }
};
export default SinglePokemon;
