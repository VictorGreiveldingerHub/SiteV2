// == Import npm
import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

// Import Components
import MenuNav from 'src/components/MenuNav';
import Acceuil from 'src/components/Acceuil';
import Profil from 'src/components/Profil';
import Contact from 'src/components/Contact';

// == Import
import './styles.css';

// == Composant
const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <MenuNav />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Acceuil} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profil" component={Profil} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

// == Export
export default App;
