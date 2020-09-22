import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { BsArrowRight } from 'react-icons/bs';

import '../styles/not-found-page.scss';

const NotFoundPage = () => (
    <Layout>
        <SEO title="Page Not Found" />
        <section className="not-found-page">
            <div className="container not-found-page__container">
                <h2 className="not-found-page__title">404</h2>
                <h3 className="not-found-page__subtitle">Sorry, it seems that this page does not exist.</h3>
                <Link to="/" className="button">
                    Go Home <BsArrowRight />
                </Link>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
