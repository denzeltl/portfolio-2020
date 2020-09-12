import React from 'react';
import { Link } from 'gatsby';

import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';

import '../styles/footer.scss';

const Footer = () => (
    <footer className="footer">
        <svg viewBox="0 0 1500 84" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1500 0L1416.67 14.75C1333.33 29.5 1166.67 59 1000 59C833.333 59 666.667 29.5 500 24.6141C333.333 19.3594 166.667 39.6406 83.3334 49.1359L0 59L-6.5 84H83.3334C166.667 84 333.333 84 500 84C666.667 84 833.333 84 1000 84C1166.67 84 1333.33 84 1416.67 84H1500V0Z"
                fill="#101D42"
            />
        </svg>

        <div className="footer__container">
            <div className="container">
                <h3 className="footer__title">Let's get in touch!</h3>
                <p className="footer__text">
                    Have something to say? Feel free to leave a message.
                    <br />I would love to hear from you!
                </p>
                <Link to="/contact" className="button footer__button">
                    Contact Me <BsArrowRight />
                </Link>
                <ul className="footer__links">
                    <a href="#" className="footer__link">
                        <IoIosMail className="footer__icon" />
                    </a>
                    <a href="#" className="footer__link">
                        <IoLogoLinkedin className="footer__icon" />
                    </a>
                    <a href="#" className="footer__link">
                        <IoLogoGithub className="footer__icon" />
                    </a>
                </ul>
                <p className="footer__copyright">© 2020 Denzel Tiam-Lee</p>
            </div>
        </div>
    </footer>
);

export default Footer;
