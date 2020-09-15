import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import '../styles/header.scss';

const Header = () => {
    const [scrolledNavbar, setScrolledNavbar] = useState(false);
    const navRef = useRef();

    navRef.current = scrolledNavbar;

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > document.querySelector('.header').offsetHeight;
            if (navRef.current !== scrolled) {
                setScrolledNavbar(scrolled);
            }
        };
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolledNavbar ? 'is-scrolled' : ''}`}>
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
};

export default Header;
