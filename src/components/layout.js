import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
import '../styles/layout.scss';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
