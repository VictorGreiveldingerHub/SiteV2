// == Import npm
import React from 'react';

// Import Components
import MenuNav from 'src/components/MenuNav';

// import Header from 'src/components/Header';

// == Import
import './styles.css';

// == Composant
const App = () => {
  return (
    <div className="app">
      <MenuNav />
      {/* <Header /> */}
    </div>
  );
};

// == Export
export default App;
