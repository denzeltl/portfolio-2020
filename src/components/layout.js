import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
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
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className="main">{children}</main>
        </>
    );
};

export default Layout;
