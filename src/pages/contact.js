import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

import '../styles/contact-page.scss';

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formState }),
        })
            .then(() => alert('Success!'))
            .catch((error) => alert(error));

        e.preventDefault();
    };
    return (
        <>
            <Layout>
                <SEO title="Contact" />
                <section className="headline">
                    <div className="container">
                        <h2 className="title title__center">Let's Connect!</h2>
                        <p className="headline__text">
                            Feel free to leave a message, I will respond as soon as possible.
                            <br /> I look forward to hearing from you!
                        </p>
                    </div>
                </section>
                <section className="contact-page">
                    <div className="container">
                        <form className="contact-page__form" onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />
                            <div class="contact-page__wrapper">
                                <input className="contact-page__input" required type="text" name="name" onChange={handleChange} value={formState.name} />
                                <label className={`contact-page__label ${formState.name ? 'has-value' : ''}`} htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div class="contact-page__wrapper">
                                <input className="contact-page__input" required type="email" name="email" onChange={handleChange} value={formState.email} />
                                <label className={`contact-page__label ${formState.email ? 'has-value' : ''}`} htmlFor="email">
                                    Email
                                </label>
                            </div>
                            <div class="contact-page__wrapper">
                                <textarea className="contact-page__input" required name="message" rows="4" onChange={handleChange} value={formState.message} />
                                <label className={`contact-page__label ${formState.message ? 'has-value' : ''}`} htmlFor="message">
                                    Message
                                </label>
                            </div>
                            <button type="submit" className="contact-page__button button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </Layout>
            <Footer title="Contact" />
        </>
    );
};

export default ContactPage;
