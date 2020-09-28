import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Footer from '../../components/footer';

import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';

import '../../styles/contact-page.scss';

const SuccessPage = () => {
    const successRefAnimation = useAnimation();
    const [successRef, successRefView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px',
    });
    useEffect(() => {
        if (successRefView) {
            successRefAnimation.start('visible');
        }
    }, [successRefAnimation, successRefView]);
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
                <section className="headline contact-page__success__headline">
                    <motion.div className="container" animate="visible" initial="hidden" variants={headlineVariants}>
                        <h2 className="title title__center">Thank You!</h2>
                    </motion.div>
                </section>
                <section className="contact-page">
                    <div className="container">
                        <motion.div
                            className="contact-page__success"
                            ref={successRef}
                            animate={successRefAnimation}
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
                            <h3 className="contact-page__success__title">Success!</h3>
                            <BsCheckCircle className="contact-page__success__icon" />
                            <p className="contact-page__success__message">
                                Your message has been successfully sent. <br />
                                Please expect an email within 24 hours.
                                <br />
                                Thank you!
                            </p>
                            <motion.div
                                className="is-inline-block"
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
                                <Link to="/" className="button contact-page__success__button">
                                    Go Home <BsArrowRight />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </Layout>
            <Footer title="Contact" />
        </>
    );
};

export default SuccessPage;
