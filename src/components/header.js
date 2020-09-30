import React, { useEffect, useRef, useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion } from 'framer-motion';

import { IoIosMenu, IoMdClose, IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

import '../styles/header.scss';

const Header = () => {
    const [scrolledNavbar, setScrolledNavbar] = useState(false);
    const [toggledButton, setToggledButton] = useState(false);
    const navRef = useRef();

    navRef.current = scrolledNavbar;

    const toggleNavbar = () => {
        setToggledButton(!toggledButton);
    };

    const headerVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
            ease: [0.6, 0.05, -0.01, 0.9],
        },
        hidden: {
            opacity: 0,
            y: -72,
        },
    };
    // const navLinkVariants = {
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 0.4 },
    //         ease: [0.6, 0.05, -0.01, 0.9],
    //     },
    //     hidden: {
    //         opacity: 0,
    //         x: -32,
    //     },
    // };
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > document.querySelector('.header').offsetHeight / 2;
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
                <h1 className={`header__logo ${toggledButton ? 'is-toggled' : ''}`}>
                    <AniLink cover duration={1} direction="up" bg="#f18805" to="/">
                        denzeltl
                    </AniLink>
                </h1>
                <button onClick={toggleNavbar} className="header__burger">
                    <IoIosMenu />
                </button>
                <nav className={`header__nav ${toggledButton ? 'is-toggled' : ''}`}>
                    <AniLink cover duration={1} direction="up" bg="#f18805" activeClassName="is-active" to="/">
                        Home
                    </AniLink>
                    <AniLink cover duration={1} direction="up" bg="#f18805" activeClassName="is-active" to="/about">
                        About
                    </AniLink>
                    <AniLink cover duration={1} direction="up" bg="#f18805" activeClassName="is-active" to="/projects">
                        Projects
                    </AniLink>
                    <AniLink cover duration={1} direction="up" bg="#f18805" className="is-contact" activeClassName="is-active" to="/contact">
                        Contact
                    </AniLink>
                    <ul className="header__links">
                        <a href="mailto:denzeltlee@gmail.com" className="header__link">
                            <IoIosMail className="header__icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/denzel-tiam-lee" rel="noopener noreferrer" target="_blank" className="header__link">
                            <IoLogoLinkedin className="header__icon" />
                        </a>
                        <a href="https://github.com/denzeltl?tab=repositories" rel="noopener noreferrer" target="_blank" className="header__link">
                            <IoLogoGithub className="header__icon" />
                        </a>
                    </ul>
                    <button onClick={toggleNavbar} className="header__close">
                        <IoMdClose />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
