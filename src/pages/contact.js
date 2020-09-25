import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

import '../styles/contact-page.scss';

const ContactPage = () => {
    return (
        <>
            <Layout>
                <SEO title="Contact" />
                <section className="headline">
                    <div className="container">
                        <h2 className="title title__center">Let's Connect!</h2>
                        <p className="headline__text">
                            Feel free to leave me a message, I will respond as soon as I can.
                            <br /> I look forward to hearing from you!
                        </p>
                    </div>
                </section>
                <section className="contact-page">
                    <h3>Contact me</h3>
                    <p>Welcome to page contact</p>
                </section>
            </Layout>
            <Footer title="Contact" />
        </>
    );
};

export default ContactPage;
