import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
                                <AniLink paintDrip duration={1.2} hex="#f18805" to="/contact" className="button footer__button">
                                    Contact Me <BsArrowRight />
                                </AniLink>
                            </>
                        )}
                    </div>
                    <ul className="footer__links">
                        <a href="mailto:denzeltlee@gmail.com" className="footer__link">
                            <IoIosMail className="footer__icon" />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/denzel-tiam-lee" target="_blank" className="footer__link">
                            <IoLogoLinkedin className="footer__icon" />
                        </a>
                        <a rel="noopener noreferrer" href="https://github.com/denzeltl?tab=repositories" target="_blank" className="footer__link">
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
