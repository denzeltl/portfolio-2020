import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

import { BsArrowRight } from 'react-icons/bs';

import '../styles/not-found-page.scss';

const NotFoundPage = () => (
    <>
        <Layout>
            <SEO title="Page Not Found" />
            <section className="headline not-found-page__headline">
                <div className="container">
                    <h2 className="title title__center">Page Not Found</h2>
                </div>
            </section>
            <section className="not-found-page">
                <div className="container">
                    <h2 className="not-found-page__title">404</h2>
                    <h3 className="not-found-page__subtitle">Sorry, it seems that this page does not exist.</h3>
                    <Link to="/" className="button not-found-page__button">
                        Go Home <BsArrowRight />
                    </Link>
                </div>
            </section>
        </Layout>
        <Footer title="Contact" />
    </>
);

export default NotFoundPage;
