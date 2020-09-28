import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

import { BsArrowRight } from 'react-icons/bs';

import '../styles/not-found-page.scss';

const NotFoundPage = () => {
    const notFoundRefAnimation = useAnimation();
    const [notFoundRef, notFoundRefView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px',
    });
    useEffect(() => {
        if (notFoundRefView) {
            notFoundRefAnimation.start('visible');
        }
    }, [notFoundRefAnimation, notFoundRefView]);
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
                <SEO title="Page Not Found" />
                <section className="headline not-found-page__headline">
                    <motion.div className="container" animate="visible" initial="hidden" variants={headlineVariants}>
                        <h2 className="title title__center">Page Not Found</h2>
                    </motion.div>
                </section>
                <section className="not-found-page">
                    <motion.div
                        className="container"
                        ref={notFoundRef}
                        animate={notFoundRefAnimation}
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
                        <h2 className="not-found-page__title">404</h2>
                        <h3 className="not-found-page__subtitle">Sorry, it seems that this page does not exist.</h3>
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
                            <Link to="/" className="button not-found-page__button">
                                Go Home <BsArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </Layout>
            <Footer title="Contact" />
        </>
    );
};

export default NotFoundPage;
