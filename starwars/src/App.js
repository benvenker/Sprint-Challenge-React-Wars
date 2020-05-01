import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Character from "./components/Character";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      <Route exact path="/" component={SearchPage}></Route>
      <Route path="/character/:id" component={Character}></Route>
      <Route path="/episode/:id"></Route>
    </>
  );
};

export default App;
