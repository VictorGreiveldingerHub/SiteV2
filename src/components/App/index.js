// == Import npm
import React from 'react';

// Import Components
import MenuNav from 'src/components/MenuNav';
import Acceuil from 'src/components/Acceuil';

// == Import
import './styles.css';

// == Composant
const App = () => {
  return (
    <div className="app">
      <MenuNav />
      <Acceuil />
    </div>
  );
};

// == Export
export default App;
