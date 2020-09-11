import React from 'react';
import { Link } from 'gatsby';

import '../styles/header.scss';

const Header = () => (
    <header className="header">
        <div className="header__inner">
            <h1 className="header__logo">
                <Link to="/">denzeltl</Link>
            </h1>
            <nav className="header__nav">
                <Link activeClassName="is-active" to="/">
                    Home
                </Link>
                <Link activeClassName="is-active" to="/about">
                    About
                </Link>
                <Link activeClassName="is-active" to="/projects">
                    Projects
                </Link>
                <Link activeClassName="is-active" to="/contact">
                    Contact
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;
