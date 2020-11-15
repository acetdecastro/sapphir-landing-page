import { useState } from 'react';

import { NavContext } from './utils/NavContext';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

const App = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavMenuToggle = () => {
    setIsNavMenuOpen(isNavMenuOpen ? false : true);
  };

  return (
    <div className={isNavMenuOpen ? 'fixed' : ''}>
      <NavContext.Provider
        value={{
          isNavMenuOpen,
          handleNavMenuToggle,
        }}
      >
        <Header />
      </NavContext.Provider>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
