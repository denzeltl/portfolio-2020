import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Particles from 'react-particles-js';
import { BsArrowRight } from 'react-icons/bs';

import '../styles/index.scss';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            headDp: file(relativePath: { eq: "head-display-picture.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <SEO title="Home" />
            <section className="hero">
                <Particles
                    className="hero__particles"
                    params={{
                        particles: {
                            number: {
                                value: 120,
                                density: {
                                    enable: true,
                                },
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    speed: 4,
                                    size_min: 0.3,
                                },
                            },
                            line_linked: {
                                enable: false,
                            },
                            move: {
                                random: true,
                                speed: 1,
                                direction: 'top',
                                out_mode: 'out',
                            },
                        },
                    }}
                />
                <div className="container">
                    <h2 className="hero__title">Hi! I’m Denzel.</h2>
                    <p className="hero__text">
                        I’m a Web Developer based in Quezon City, Philippines.
                        <br />I enjoy creating well-designed, responsive, and accessible websites.
                    </p>
                    <Link to="/contact" className="button hero__button">
                        Contact Me <BsArrowRight />
                    </Link>
                </div>
            </section>
            <section className="about">
                <div className="container about__container">
                    <div className="about__details">
                        <h3 className="title about__title">About Me</h3>
                        <p className="about__text">
                            I'm passionate about all the things that I do. I continuously seek knowledge from different challenges and experiences. During my free time, I like to learn to keep myself
                            up-to-date with the latest technologies and find ways to further improve my skill set.
                        </p>
                        <Link to="/about" className="button about__button">
                            My Story <BsArrowRight />
                        </Link>
                    </div>
                    <div className="about__image">
                        <Img fluid={data.headDp.childImageSharp.fluid} alt="Head Display Picture" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
