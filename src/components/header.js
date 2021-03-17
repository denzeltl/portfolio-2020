import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.header
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                    ease: [0.6, 0.05, -0.01, 0.9],
                },
                hidden: {
                    opacity: 0,
                    y: -72,
                },
            }}
            className={`header ${scrolledNavbar ? 'is-scrolled' : ''}`}
        >
            <div className="header__inner">
                <h1 className={`header__logo ${toggledButton ? 'is-toggled' : ''}`}>
                    <Link to="/">denzeltl</Link>
                </h1>
                <button onClick={toggleNavbar} className="header__burger">
                    <IoIosMenu />
                </button>
                <nav className={`header__nav ${toggledButton ? 'is-toggled' : ''}`}>
                    <Link activeClassName="is-active" to="/">
                        Home
                    </Link>
                    <Link activeClassName="is-active" to="/about">
                        About
                    </Link>
                    <Link activeClassName="is-active" to="/projects">
                        Projects
                    </Link>
                    <Link className="is-contact" activeClassName="is-active" to="/contact">
                        Contact
                    </Link>
                </nav>
                <AnimatePresence>
                    {toggledButton && (
                        <motion.nav
                            className="header__nav header__nav__sp"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: {
                                    x: 0,
                                    transition: { duration: 0.3, when: 'beforeChildren', staggerChildren: 0.1, type: 'spring', bounce: 0 },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    x: '100%',
                                },
                            }}
                        >
                            <motion.div
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.4 },
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                    },
                                    hidden: {
                                        opacity: 0,
                                        x: -32,
                                    },
                                }}
                            >
                                <Link activeClassName="is-active" to="/">
                                    Home
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.4 },
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                    },
                                    hidden: {
                                        opacity: 0,
                                        x: -32,
                                    },
                                }}
                            >
                                <Link activeClassName="is-active" to="/about">
                                    About
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.4 },
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                    },
                                    hidden: {
                                        opacity: 0,
                                        x: -32,
                                    },
                                }}
                            >
                                <Link activeClassName="is-active" to="/projects">
                                    Projects
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.4 },
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                    },
                                    hidden: {
                                        opacity: 0,
                                        x: -32,
                                    },
                                }}
                            >
                                <Link className="is-contact" activeClassName="is-active" to="/contact">
                                    Contact
                                </Link>
                            </motion.div>
                            <ul className="header__links">
                                <motion.a
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.4 },
                                            ease: [0.6, 0.05, -0.01, 0.9],
                                        },
                                        hidden: {
                                            opacity: 0,
                                            y: 32,
                                        },
                                    }}
                                    href="mailto:hello@denzeltl.com"
                                    className="header__link"
                                >
                                    <IoIosMail className="header__icon" />
                                </motion.a>
                                <motion.a
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.4 },
                                            ease: [0.6, 0.05, -0.01, 0.9],
                                        },
                                        hidden: {
                                            opacity: 0,
                                            y: 32,
                                        },
                                    }}
                                    href="https://www.linkedin.com/in/denzel-tiam-lee"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="header__link"
                                >
                                    <IoLogoLinkedin className="header__icon" />
                                </motion.a>
                                <motion.a
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.4 },
                                            ease: [0.6, 0.05, -0.01, 0.9],
                                        },
                                        hidden: {
                                            opacity: 0,
                                            y: 32,
                                        },
                                    }}
                                    href="https://github.com/denzeltl?tab=repositories"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="header__link"
                                >
                                    <IoLogoGithub className="header__icon" />
                                </motion.a>
                            </ul>
                            <button onClick={toggleNavbar} className="header__close">
                                <IoMdClose />
                            </button>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
