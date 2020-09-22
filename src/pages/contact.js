import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <section className="page-banner">
                <h2>Contact me</h2>
                <p>Welcome to page contact</p>
                <Link to="/">Go back to the homepage</Link>
            </section>
        </Layout>
    );
};

export default ContactPage;
