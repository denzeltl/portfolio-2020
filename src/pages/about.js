import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/about-page.scss';

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            headDp: file(relativePath: { eq: "head-display-picture.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <SEO title="About" />
            <section className="headline">
                <div className="container">
                    <h2 className="title title__center">About Me</h2>
                    <p className="headline__text">
                        I’m a Web Developer based in Quezon City, Philippines.
                        <br className="is-pc" /> I enjoy creating well-designed, responsive, and accessible websites.
                    </p>
                </div>
            </section>
            <section className="about-page__background">
                <div className="container">
                    <div className="about-page__background__text">
                        <h3 className="title background__title">Background</h3>
                        <p className="about-page__background__text">
                            I'm passionate about the things that I do. I continuously seek knowledge from different challenges and experiences. During my free time, I like to learn to keep myself
                            up-to-date with the latest technologies and find ways to further improve my skill set.
                        </p>
                    </div>
                    <div className="about-page__background__image">
                        <Img fluid={data.headDp.childImageSharp.fluid} alt="Head Display Picture" />
                    </div>
                </div>
            </section>
            <section className="about-page__experience">
                <div className="container">
                    <h3 className="title background__title">Experience</h3>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
