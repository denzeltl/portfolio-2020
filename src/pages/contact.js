import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

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
    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        message: false,
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
    const handleFocus = (e) => {
        setIsFocused({
            ...isFocused,
            [e.target.name]: true,
        });
    };
    const handleBlur = (e) => {
        setIsFocused({
            ...isFocused,
            [e.target.name]: false,
        });
    };
    const handleSubmit = (e) => {
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formState }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(() => alert('Sorry, an error has occured. Please try resubmitting your form.'));

        e.preventDefault();
    };
    const formRefAnimation = useAnimation();
    const [formRef, formRefView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px',
    });
    useEffect(() => {
        if (formRefView) {
            formRefAnimation.start('visible');
        }
    }, [formRefAnimation, formRefView]);
    const headlineVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            ease: [0.6, 0.05, -0.01, 0.9],
        },
        hidden: {
            opacity: 0,
            y: 72,
        },
    };
    return (
        <>
            <Layout>
                <SEO title="Contact" />
                <section className="headline">
                    <motion.div className="container" animate="visible" initial="hidden" variants={headlineVariants}>
                        <h2 className="title title__center">Let's Connect!</h2>
                        <motion.p
                            className="headline__text"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1, delay: 0.4 },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72,
                                },
                            }}
                        >
                            Feel free to leave a message, I will respond as soon as possible.
                            <br /> I look forward to hearing from you!
                        </motion.p>
                    </motion.div>
                </section>
                <section className="contact-page">
                    <div className="container">
                        <motion.form
                            className="contact-page__form"
                            onSubmit={handleSubmit}
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            action="/contact/success"
                            ref={formRef}
                            animate={formRefAnimation}
                            initial="hidden"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, when: 'beforeChildren' },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72,
                                },
                            }}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div class="contact-page__wrapper">
                                <input
                                    className={`contact-page__input ${isFocused.name ? 'is-focused' : ''}`}
                                    required
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={formState.name}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className={`contact-page__label ${formState.name ? 'has-value' : ''}`} htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div class="contact-page__wrapper">
                                <input
                                    className={`contact-page__input ${isFocused.email ? 'is-focused' : ''}`}
                                    required
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formState.email}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className={`contact-page__label ${formState.email ? 'has-value' : ''}`} htmlFor="email">
                                    Email
                                </label>
                            </div>
                            <div class="contact-page__wrapper">
                                <textarea
                                    className={`contact-page__input ${isFocused.message ? 'is-focused' : ''}`}
                                    required
                                    name="message"
                                    rows="4"
                                    onChange={handleChange}
                                    value={formState.message}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                                <label className={`contact-page__label contact-page__label--message ${formState.message ? 'has-value' : ''}`} htmlFor="message">
                                    Message
                                </label>
                            </div>
                            <motion.button
                                type="submit"
                                className="contact-page__button button"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                    },
                                    hidden: {
                                        opacity: 0,
                                        x: -100,
                                    },
                                }}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </div>
                </section>
            </Layout>
            <Footer title="Contact" />
        </>
    );
};

export default ContactPage;
