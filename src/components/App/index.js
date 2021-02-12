// == Import npm
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// Import Components
import MenuNav from 'src/components/MenuNav';
import Acceuil from 'src/components/Acceuil';
import Contact from 'src/components/Contact';

// == Import
import './styles.css';

// == Composant
const App = () => {
  return (
    <div className="app">
      <MenuNav />
      <Switch>
        <Route exact path="/"><Acceuil /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
