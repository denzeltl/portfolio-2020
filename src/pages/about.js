import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <section className="page-banner">
            <h2>About me</h2>
            <p>Welcome to page about</p>
            <Link to="/">Go back to the homepage</Link>
        </section>
    </Layout>
);

export default AboutPage;
