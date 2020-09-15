import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Particles from 'react-particles-js';
import { BsArrowRight } from 'react-icons/bs';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiReact, SiSass, SiJquery, SiTailwindcss, SiGit, SiGithub, SiNpm, SiGraphql, SiNetlify } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

import '../styles/index.scss';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            headDp: file(relativePath: { eq: "head-display-picture.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectPomodoro: file(relativePath: { eq: "project-pomodoro.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectWeather: file(relativePath: { eq: "project-weather.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectRr: file(relativePath: { eq: "project-rr.png" }) {
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
                <div className="container">
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
                                        <SiNpm className="skills__skillset__icon" />
                                        <p className="skills__skillset__name">npm</p>
                                    </li>
                                    <li className="skills__skillset__item">
                                        <SiGraphql className="skills__skillset__icon" />
                                        <p className="skills__skillset__name">GraphQL</p>
                                    </li>
                                    <li className="skills__skillset__item">
                                        <SiNetlify className="skills__skillset__icon" />
                                        <p className="skills__skillset__name">Netlify</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects">
                <div className="container">
                    <h3 className="title title__center projects__title">Featured Projects</h3>
                    <ul className="projects__list">
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a href="https://denzeltl-pomodoro.netlify.app/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectPomodoro.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Pomodoro Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h4 className="projects__item__head__title">Pomodoro Timer</h4>
                                    <p className="projects__item__head__date">August 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which can be
                                    toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>React</li>
                                        <li>Sass</li>
                                        <li>PWA</li>
                                        <li>Netlify</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/pomodoro" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl-pomodoro.netlify.app/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a rel="noopener noreferrer" href="https://denzeltl.github.io/weather-app/" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img
                                            fluid={data.projectWeather.childImageSharp.fluid}
                                            style={{ maxHeight: '21rem' }}
                                            imgStyle={{ objectPosition: 'center top' }}
                                            alt="Screenshot of Weather App Project"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h4 className="projects__item__head__title">Weather App</h4>
                                    <p className="projects__item__head__date">January 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    A simple weather app that fetches and displays the local timezone, weather, and temperature of a city using the api from <i>OpenWeatherMap</i>. Querying letters in
                                    the search box will return a list of available cities.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>HTML</li>
                                        <li>Sass</li>
                                        <li>JavaScript</li>
                                        <li>API</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/weather-app" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/weather-app/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a rel="noopener noreferrer" href="https://denzeltl.github.io/rr-wraith/" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectRr.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Rolls-Royce Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h4 className="projects__item__head__title">Rolls-Royce Wraith Landing Page</h4>
                                    <p className="projects__item__head__date">September 2018</p>
                                </div>
                                <p className="projects__item__body">
                                    My first website project created — this challenge is taken from freeCodeCamp's <i>Responsive Web Design - Build a Product Landing Page</i> project. I redesigned the
                                    landing page of Rolls-Royce Wraith.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bulma</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/rr-wraith" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/rr-wraith/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Link to="/projects" className="button projects__button">
                        View More <BsArrowRight />
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
