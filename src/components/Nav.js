import React from 'react';
import Burger from './Burger';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-between items-center space-x-2">
        <a href="/">
          <div className="hexagon"></div>
        </a>

        <span className="text-gray-600 leading-5">(514)-700-3009</span>
      </div>

      <Burger />
    </nav>
  );
};

export default Nav;
