import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";

import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import "../styles/projects-page.scss";

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            projectChess: file(relativePath: { eq: "project-chess.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectTime: file(relativePath: { eq: "project-time.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectPortfolio2020: file(relativePath: { eq: "project-portfolio-2020.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectPomodoro: file(relativePath: { eq: "project-pomodoro.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectPokedex: file(relativePath: { eq: "project-pokedex.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectMovie: file(relativePath: { eq: "project-movie.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectTicTacToe: file(relativePath: { eq: "project-tic-tac-toe.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectRps: file(relativePath: { eq: "project-rps.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectWeather: file(relativePath: { eq: "project-weather.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectPortfolio2019: file(relativePath: { eq: "project-portfolio-2019.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectRubiks: file(relativePath: { eq: "project-rubiks.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectDocprep: file(relativePath: { eq: "project-docprep.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectNumber: file(relativePath: { eq: "project-number.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectRr: file(relativePath: { eq: "project-rr.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    const projectOneRefAnimation = useAnimation();
    const projectTwoRefAnimation = useAnimation();
    const projectThreeRefAnimation = useAnimation();
    const projectFourRefAnimation = useAnimation();
    const projectFiveRefAnimation = useAnimation();
    const projectSixRefAnimation = useAnimation();
    const projectSevenRefAnimation = useAnimation();
    const projectEightRefAnimation = useAnimation();
    const projectNineRefAnimation = useAnimation();
    const projectTenRefAnimation = useAnimation();
    const projectElevenRefAnimation = useAnimation();
    const projectTwelveRefAnimation = useAnimation();
    const projectThirteenRefAnimation = useAnimation();
    const projectFourteenRefAnimation = useAnimation();
    const [projectOneRef, projectOneRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectTwoRef, projectTwoRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectThreeRef, projectThreeRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectFourRef, projectFourRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectFiveRef, projectFiveRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectSixRef, projectSixRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectSevenRef, projectSevenRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectEightRef, projectEightRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectNineRef, projectNineRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectTenRef, projectTenRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectElevenRef, projectElevenRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectTwelveRef, projectTwelveRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectThirteenRef, projectThirteenRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectFourteenRef, projectFourteenRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const headlineVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            ease: [0.6, 0.05, -0.01, 0.9],
        },
        hidden: {
            opacity: 0,
            y: 72,
        },
    };
    const parentVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.1 },
            ease: [0.6, 0.05, -0.01, 0.9],
        },
        hidden: {
            opacity: 0,
            y: 72,
        },
    };
    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
        hidden: {
            opacity: 0,
            y: 72,
        },
    };
    useEffect(() => {
        if (projectOneRefView) {
            projectOneRefAnimation.start("visible");
        }
    }, [projectOneRefAnimation, projectOneRefView]);
    useEffect(() => {
        if (projectTwoRefView) {
            projectTwoRefAnimation.start("visible");
        }
    }, [projectTwoRefAnimation, projectTwoRefView]);
    useEffect(() => {
        if (projectThreeRefView) {
            projectThreeRefAnimation.start("visible");
        }
    }, [projectThreeRefAnimation, projectThreeRefView]);
    useEffect(() => {
        if (projectFourRefView) {
            projectFourRefAnimation.start("visible");
        }
    }, [projectFourRefAnimation, projectFourRefView]);
    useEffect(() => {
        if (projectFiveRefView) {
            projectFiveRefAnimation.start("visible");
        }
    }, [projectFiveRefAnimation, projectFiveRefView]);
    useEffect(() => {
        if (projectSixRefView) {
            projectSixRefAnimation.start("visible");
        }
    }, [projectSixRefAnimation, projectSixRefView]);
    useEffect(() => {
        if (projectSevenRefView) {
            projectSevenRefAnimation.start("visible");
        }
    }, [projectSevenRefAnimation, projectSevenRefView]);
    useEffect(() => {
        if (projectEightRefView) {
            projectEightRefAnimation.start("visible");
        }
    }, [projectEightRefAnimation, projectEightRefView]);
    useEffect(() => {
        if (projectNineRefView) {
            projectNineRefAnimation.start("visible");
        }
    }, [projectNineRefAnimation, projectNineRefView]);
    useEffect(() => {
        if (projectTenRefView) {
            projectTenRefAnimation.start("visible");
        }
    }, [projectTenRefAnimation, projectTenRefView]);
    useEffect(() => {
        if (projectElevenRefView) {
            projectElevenRefAnimation.start("visible");
        }
    }, [projectElevenRefAnimation, projectElevenRefView]);
    useEffect(() => {
        if (projectTwelveRefView) {
            projectTwelveRefAnimation.start("visible");
        }
    }, [projectTwelveRefAnimation, projectTwelveRefView]);
    useEffect(() => {
        if (projectThirteenRefView) {
            projectThirteenRefAnimation.start("visible");
        }
    }, [projectThirteenRefAnimation, projectThirteenRefView]);
    useEffect(() => {
        if (projectFourteenRefView) {
            projectFourteenRefAnimation.start("visible");
        }
    }, [projectFourteenRefAnimation, projectFourteenRefView]);
    return (
        <>
            <Layout>
                <SEO title="Projects" />
                <section className="headline">
                    <motion.div className="container" animate="visible" initial="hidden" variants={headlineVariants}>
                        <h2 className="title title__center">My Projects</h2>
                        <motion.p
                            className="headline__text"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1, delay: 0.4 },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72,
                                },
                            }}
                        >
                            A list of notable projects I have created — some are taken from tutorials I took while others are based from my own ideas. To view all my projects and its source code,
                            please visit my{" "}
                            <a rel="noopener noreferrer" href="https://github.com/denzeltl?tab=repositories" target="_blank">
                                repositories
                            </a>{" "}
                            on GitHub.
                        </motion.p>
                    </motion.div>
                </section>
                <section className="projects-page">
                    <div className="container">
                        <ul className="projects-page__list">
                            <motion.li className="projects-page__item" ref={projectFourteenRef} animate={projectFourteenRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://chess-notation-trainer.netlify.app/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectChess.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Chess Notation Trainer Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Chess Notation Trainer</h3>
                                        <p className="projects-page__item__head__date">May 2021</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        Train yourself to visualize chess coordinates quickly with this app. Familiarizing yourself with the notations can be very beneficial when learning how to play
                                        chess as it helps you identify positions fast.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Material UI</li>
                                            <li>PWA</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
                                            <li>
                                                <a rel="noopener noreferrer" href="https://github.com/denzeltl/chess-notation-trainer" target="_blank">
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noopener noreferrer" href="https://chess-notation-trainer.netlify.app/" target="_blank">
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectThirteenRef} animate={projectThirteenRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://time-until.netlify.app/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectTime.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Time Until Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Time Until</h3>
                                        <p className="projects-page__item__head__date">March 2021</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        Display a countdown timer in days in your local time zone or specify a particular country to display in their time zone.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Material UI</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
                                            <li>
                                                <a rel="noopener noreferrer" href="https://github.com/denzeltl/time-until" target="_blank">
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noopener noreferrer" href="https://time-until.netlify.app/" target="_blank">
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectOneRef} animate={projectOneRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.com/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectPortfolio2020.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Portfolio 2020 Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Portfolio 2020</h3>
                                        <p className="projects-page__item__head__date">September 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        My updated personal portfolio site. Created with Gatsby and hosted on Netlify. I used Netlify Forms for the contact form and Framer Motion for the animations
                                        and page transitions.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>Gatsby</li>
                                            <li>Sass</li>
                                            <li>Framer Motion</li>
                                            <li>Netlify</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectTwoRef} animate={projectTwoRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl-pomodoro.netlify.app/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectPomodoro.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Pomodoro Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Pomodoro Timer</h3>
                                        <p className="projects-page__item__head__date">August 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        A PWA Pomodoro Timer made with React which can be installed as a desktop or mobile app. Aside from its timer feature, it also has reminders which can be seen
                                        inside the settings.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>React</li>
                                            <li>Sass</li>
                                            <li>PWA</li>
                                            <li>Netlify</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectThreeRef} animate={projectThreeRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/pokedex-app/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectPokedex.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Pokedex Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Pokedex App</h3>
                                        <p className="projects-page__item__head__date">July 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        Search for any pokemon to get its details and base stats. Data is being fetched from <span className="is-italic">PokeAPI</span>. Styled using mobile first
                                        technology.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>React</li>
                                            <li>Sass</li>
                                            <li>Context API</li>
                                            <li>API</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectFourRef} animate={projectFourRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/movie-database/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img
                                                fluid={data.projectMovie.childImageSharp.fluid}
                                                style={{ maxHeight: "21rem" }}
                                                imgStyle={{ objectPosition: "center top" }}
                                                alt="Screenshot of Movie Project"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Movie Database App</h3>
                                        <p className="projects-page__item__head__date">July 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        A Movie Database web application where users can search for any movie or series to look up the movie / show information such as the plot, rating, and casts.
                                        Data is being fetched from <span className="is-italic">OMDb API</span>.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>React</li>
                                            <li>Sass</li>
                                            <li>API</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectFiveRef} animate={projectFiveRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/tic-tac-toe/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectTicTacToe.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Tic Tac Toe Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Tic Tac Toe</h3>
                                        <p className="projects-page__item__head__date">April 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        A simple 2-player Tic Tac Toe game made with JavaScript. Created with the help of <span className="is-italic">Web Dev Simplified</span>'s tutorial on YouTube.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>Sass</li>
                                            <li>JavaScript</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectSixRef} animate={projectSixRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/rock-paper-scissors/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectRps.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Rock Paper Scissors Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Rock Paper Scissors</h3>
                                        <p className="projects-page__item__head__date">February 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        Play a Rock, Paper, Scissors game against the Computer, first to 5 points wins. Made with JavaScript
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>Sass</li>
                                            <li>JavaScript</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectSevenRef} animate={projectSevenRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
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
                                                style={{ maxHeight: "21rem" }}
                                                imgStyle={{ objectPosition: "center top" }}
                                                alt="Screenshot of Weather App Project"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Weather App</h3>
                                        <p className="projects-page__item__head__date">January 2020</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        A simple weather app that fetches and displays the current local timezone, weather, and temperature of a city using the API from{" "}
                                        <span className="is-italic">OpenWeatherMap</span>. Querying letters in the search box will return a list of available cities.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>Sass</li>
                                            <li>JavaScript</li>
                                            <li>API</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectEightRef} animate={projectEightRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/personal-portfolio/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectPortfolio2019.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Portfolio 2019 Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Portfolio 2019</h3>
                                        <p className="projects-page__item__head__date">September 2019</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        My first personal portfolio site. Created with HTML, CSS, and Bootstrap
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectNineRef} animate={projectNineRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/rubiks-cube-solution/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectRubiks.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Rubik's Cube Solution Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Rubik's Cube Solution</h3>
                                        <p className="projects-page__item__head__date">August 2019</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        My take on FreeCodeCamp's <span className="is-italic">Responsive Web Design Projects - Build a Technical Documentation Page</span> project. I created a
                                        documentation page on how to solve the Rubik's Cube.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
                                            <li>
                                                <a rel="noopener noreferrer" href="https://github.com/denzeltl/rubiks-cube-solution" target="_blank">
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noopener noreferrer" href="https://denzeltl.github.io/rubiks-cube-solution/" target="_blank">
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectTenRef} animate={projectTenRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/docprep-template/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectDocprep.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Document Preparation Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Document Preparation Template</h3>
                                        <p className="projects-page__item__head__date">August 2019</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        A personal project made while working at <span className="is-italic">Gadens</span> as Processing Associate to assist with my day-to-day tasks. This template has
                                        helped me eliminate common errors by programming the code to do most of the logic work.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Tailwind CSS</li>
                                            <li>JavaScript</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectElevenRef} animate={projectElevenRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a href="https://denzeltl.github.io/number-guessing-game/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectNumber.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Number Guessing Game Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Number Guessing Game</h3>
                                        <p className="projects-page__item__head__date">April 2019</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        Guess a random chosen number between 1-150 within 10 tries. Idea is taken from Mozilla Developer Network's{" "}
                                        <span className="is-italic">Guess the Number Game</span> project.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
                                            <li>
                                                <a rel="noopener noreferrer" href="https://github.com/denzeltl/number-guessing-game" target="_blank">
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noopener noreferrer" href="https://denzeltl.github.io/number-guessing-game/" target="_blank">
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li className="projects-page__item" ref={projectTwelveRef} animate={projectTwelveRefAnimation} initial="hidden" variants={parentVariants}>
                                <div className="projects-page__item__image">
                                    <a rel="noopener noreferrer" href="https://denzeltl.github.io/rr-wraith/" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img fluid={data.projectRr.childImageSharp.fluid} style={{ maxHeight: "21rem" }} alt="Screenshot of Rolls-Royce Project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects-page__item__details">
                                    <motion.div className="projects-page__item__head" variants={childVariants}>
                                        <h3 className="projects-page__item__head__title">Rolls-Royce Wraith Landing Page</h3>
                                        <p className="projects-page__item__head__date">September 2018</p>
                                    </motion.div>
                                    <motion.p className="projects-page__item__body" variants={childVariants}>
                                        My first website project created — this challenge is taken from freeCodeCamp's{" "}
                                        <span className="is-italic">Responsive Web Design - Build a Product Landing Page</span> project. I redesigned the landing page of Rolls-Royce Wraith.
                                    </motion.p>
                                    <motion.div className="projects-page__item__foot" variants={childVariants}>
                                        <ul className="projects-page__item__foot__tools">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bulma</li>
                                        </ul>
                                        <ul className="projects-page__item__foot__links">
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
                                    </motion.div>
                                </div>
                            </motion.li>
                        </ul>
                    </div>
                </section>
            </Layout>
            <Footer title="Projects" />
        </>
    );
};

export default ProjectsPage;
