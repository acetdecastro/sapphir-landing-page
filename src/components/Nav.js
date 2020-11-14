import React from 'react';
import Burger from './Burger';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <a href="/">
          <div className="blue-hexagon"></div>
        </a>
      </div>

      <Burger />
    </nav>
  );
};

export default Nav;
