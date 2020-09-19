import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <section className="page-banner">
            <h2>My projects</h2>
            <p>Welcome to page project</p>
            <Link to="/">Go back to the homepage</Link>
        </section>
    </Layout>
);

export default ProjectsPage;
