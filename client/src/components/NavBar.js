import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>All The Recipes</Link>
        </nav>
    );
};

export default NavBar;
