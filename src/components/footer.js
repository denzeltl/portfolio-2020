import React from 'react';
import { Link } from 'gatsby';

import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';

import '../styles/footer.scss';

const Footer = ({ title }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__contact">
                        {title === 'Contact' ? (
                            <p className="footer__via">Reach me via:</p>
                        ) : (
                            <>
                                <h3 className="footer__title">Let's get in touch!</h3>
                                <p className="footer__text">
                                    Have something to say?
                                    <br />I would love to hear from you!
                                </p>
                                <Link to="/contact" className="button footer__button">
                                    Contact Me <BsArrowRight />
                                </Link>
                            </>
                        )}
                    </div>
                    <ul className="footer__links">
                        <a href="#" className="footer__link">
                            <IoIosMail className="footer__icon" />
                        </a>
                        <a href="#" target="_blank" className="footer__link">
                            <IoLogoLinkedin className="footer__icon" />
                        </a>
                        <a href="#" target="_blank" className="footer__link">
                            <IoLogoGithub className="footer__icon" />
                        </a>
                    </ul>
                </div>
                <p className="footer__copyright">&copy; 2020 Denzel Tiam-Lee</p>
            </div>
        </footer>
    );
};

export default Footer;
