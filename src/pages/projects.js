import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

import '../styles/projects.scss';

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            # projectPortfolio2020: file(relativePath: { eq: "project-portfolio-2020.png" }) {
            #     childImageSharp {
            #         fluid(maxWidth: 2000) {
            #             ...GatsbyImageSharpFluid
            #         }
            #     }
            # }
            projectPomodoro: file(relativePath: { eq: "project-pomodoro.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectPokedex: file(relativePath: { eq: "project-pokedex.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectMovie: file(relativePath: { eq: "project-movie.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectTicTacToe: file(relativePath: { eq: "project-tic-tac-toe.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectRps: file(relativePath: { eq: "project-rps.png" }) {
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
            projectDocprep: file(relativePath: { eq: "project-docprep.png" }) {
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
            <SEO title="Projects" />
            <section className="headline">
                <div className="container">
                    <h2 className="title title__center">My Projects</h2>
                    <p className="headline__text">
                        A list of projects that I’ve created. This consists of personal, learning, and tutorial projects that I feel like I’m most proud of. To view all my projects and its source
                        code, please visit my{' '}
                        <a rel="noopener noreferrer" href="https://github.com/denzeltl?tab=repositories" target="_blank">
                            repositories
                        </a>{' '}
                        on GitHub.
                    </p>
                </div>
            </section>
            <section className="projects">
                <div className="container">
                    <ul className="projects__list">
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a href="https://denzeltl.com/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectPomodoro.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Portfolio 2020 Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Portfolio 2020</h3>
                                    <p className="projects__item__head__date">September 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>Gatsby</li>
                                        <li>Sass</li>
                                        <li>Framer Motion</li>
                                        <li>Netlify</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/portfolio-2020" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.com" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
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
                                    <h3 className="projects__item__head__title">Pomodoro Timer</h3>
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
                                <a href="https://denzeltl.github.io/pokedex-app/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectPokedex.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Pokedex Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Pokedex App</h3>
                                    <p className="projects__item__head__date">July 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>React</li>
                                        <li>Sass</li>
                                        <li>Context API</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/pokedex-app" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/pokedex-app/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a href="https://denzeltl.github.io/movie-database/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectMovie.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Movie Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Movie Database App</h3>
                                    <p className="projects__item__head__date">July 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>React</li>
                                        <li>Sass</li>
                                        <li>API</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/movie-database" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/movie-database/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a href="https://denzeltl.github.io/tic-tac-toe/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectTicTacToe.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Tic Tac Toe Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Tic Tac Toe</h3>
                                    <p className="projects__item__head__date">April 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>HTML</li>
                                        <li>Sass</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/tic-tac-toe" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/tic-tac-toe/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a href="https://denzeltl.github.io/rock-paper-scissors/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectRps.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Rock Paper Scissors Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Rock Paper Scissors</h3>
                                    <p className="projects__item__head__date">February 2020</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>HTML</li>
                                        <li>Sass</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/rock-paper-scissors" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/rock-paper-scissors/" target="_blank">
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
                                    <h3 className="projects__item__head__title">Weather App</h3>
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
                                <a href="https://denzeltl.github.io/personal-portfolio/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectPortfolio2019.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Document Preparation Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Portfolio 2019</h3>
                                    <p className="projects__item__head__date">September 2019</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/personal-portfolio" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/personal-portfolio/" target="_blank">
                                                <FiExternalLink />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="projects__item__image">
                                <a href="https://denzeltl.github.io/docprep-template/" rel="noopener noreferrer" target="_blank">
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <p>
                                            Visit Site <FiExternalLink />
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <Img fluid={data.projectDocprep.childImageSharp.fluid} style={{ maxHeight: '21rem' }} alt="Screenshot of Document Preparation Project" />
                                    </div>
                                </a>
                            </div>
                            <div className="projects__item__details">
                                <div className="projects__item__head">
                                    <h3 className="projects__item__head__title">Document Preparation Template</h3>
                                    <p className="projects__item__head__date">August 2019</p>
                                </div>
                                <p className="projects__item__body">
                                    {/* TODO: */}A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also contains reminders which
                                    can be toggled on or off inside the settings.
                                </p>
                                <div className="projects__item__foot">
                                    <ul className="projects__item__foot__tools">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Tailwind CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <ul className="projects__item__foot__links">
                                        <li>
                                            <a rel="noopener noreferrer" href="https://github.com/denzeltl/docprep-template" target="_blank">
                                                <SiGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="https://denzeltl.github.io/docprep-template/" target="_blank">
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
                                    <h3 className="projects__item__head__title">Rolls-Royce Wraith Landing Page</h3>
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
                </div>
            </section>
        </Layout>
    );
};

export default ProjectsPage;
