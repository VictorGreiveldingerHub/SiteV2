// == Import npm
import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

// Import Components
import Acceuil from 'src/components/Acceuil';
import Profil from 'src/components/Profil';
import Description from 'src/components/Description';
import Skills from 'src/components/Skills';
import Works from 'src/components/Works';
import Contact from 'src/components/Contact';
import MenuNav from 'src/components/MenuNav';
// == Import
import './styles.css';

// == Composant
const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter nitial={false}>
        <MenuNav />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"><Acceuil /></Route>
          <Route exact path="/profil"><Profil /></Route>
          <Route exact path="/profil/victor-greiveldinger"><Description /></Route>
          <Route exact path="/skills"><Skills /></Route>
          <Route exact path="/works"><Works /></Route>
          <Route exact path="/contact"><Contact /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

// == Export
export default App;
