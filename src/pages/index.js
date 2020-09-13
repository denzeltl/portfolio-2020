import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Particles from 'react-particles-js';
import { BsArrowRight } from 'react-icons/bs';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiReact, SiSass, SiJquery, SiTailwindcss, SiGit, SiGithub, SiNpm, SiGraphql } from 'react-icons/si';

import '../styles/index.scss';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            headDp: file(relativePath: { eq: "head-display-picture.png" }) {
                childImageSharp {
                    fluid(maxWidth: 350) {
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
            <section className="skills">
                <h3 className="title title__center skills__title">Skills</h3>
                <div className="skills__container">
                    <p className="skills__container__title">These are the main languages, frameworks / libraries, and tools that I use / have used.</p>
                    <div className="skills__container__content">
                        <div className="skills__skillset">
                            <h4 className="skills__skillset__title">Languages</h4>
                            <ul className="skills__skillset__list">
                                <li className="skills__skillset__item">
                                    <SiHtml5 className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">HTML</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiCss3 className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">CSS</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiJavascript className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">JavaScript</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiPhp className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">PHP</p>
                                </li>
                            </ul>
                        </div>
                        <div className="skills__skillset">
                            <h4 className="skills__skillset__title">Frameworks / Libraries</h4>
                            <ul className="skills__skillset__list">
                                <li className="skills__skillset__item">
                                    <SiReact className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">React</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiSass className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">Sass</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiJquery className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">jQuery</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiTailwindcss className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">Tailwind CSS</p>
                                </li>
                            </ul>
                        </div>
                        <div className="skills__skillset">
                            <h4 className="skills__skillset__title">Tools</h4>
                            <ul className="skills__skillset__list">
                                <li className="skills__skillset__item">
                                    <SiGit className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">Git</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiGithub className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">GitHub</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiNpm className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">npm</p>
                                </li>
                                <li className="skills__skillset__item">
                                    <SiGraphql className="skills__skillset__icon" />
                                    <p className="skills__skillset__name">GraphQL</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
