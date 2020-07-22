import React, { Fragment } from "react";
import "./App.css";
import Header from "./Component/Header";
import { Provider } from "react-redux";
import store from "./Store";
import PokemonsData from "./Component/PokemonsData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePokemon from "./Component/SinglePokemon";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={PokemonsData}></Route>
            <Route path="/pokemon" exact component={SinglePokemon}></Route>
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
