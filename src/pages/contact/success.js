import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Footer from '../../components/footer';

import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';

import '../../styles/contact-page.scss';

const SuccessPage = () => {
    return (
        <>
            <Layout>
                <SEO title="Contact" />
                <section className="headline contact-page__success__headline">
                    <div className="container">
                        <h2 className="title title__center">Thank You!</h2>
                    </div>
                </section>
                <section className="contact-page">
                    <div className="container">
                        <div className="contact-page__success">
                            <h3 className="contact-page__success__title">Success!</h3>
                            <BsCheckCircle className="contact-page__success__icon" />
                            <p className="contact-page__success__message">
                                Your message has been successfully sent. <br />
                                Please expect an email within 24 hours.
                                <br />
                                Thank you!
                            </p>
                            <Link to="/" className="button contact-page__success__button">
                                Go Home <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer title="Contact" />
        </>
    );
};

export default SuccessPage;
