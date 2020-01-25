import React from "react";  
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <main>
      <Header />
      <TabBar/>
      <Route exact path="/" component={WelcomePage}/> 
      {/* <Route path="/character" component={CharacterList}/> */}
    </main>
  );
}
