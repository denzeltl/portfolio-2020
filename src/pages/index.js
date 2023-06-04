import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";

import Particles from "react-particles-js";
import { BsArrowRight } from "react-icons/bs";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiMaterialUi,
    SiGit,
    SiGithub,
    SiNpm,
    SiFigma,
    SiN,
    SiTailwindcssetlify,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import "../styles/index.scss";

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
            projectNotes: file(relativePath: { eq: "project-notes.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectChess: file(relativePath: { eq: "project-chess.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            projectTime: file(relativePath: { eq: "project-time.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    const aboutTextRefAnimation = useAnimation();
    const aboutImageRefAnimation = useAnimation();
    const skillsRefAnimation = useAnimation();
    const skillsTextRefAnimation = useAnimation();
    const skillsetOneRefAnimation = useAnimation();
    const skillsetTwoRefAnimation = useAnimation();
    const skillsetThreeRefAnimation = useAnimation();
    const projectsRefAnimation = useAnimation();
    const projectOneRefAnimation = useAnimation();
    const projectTwoRefAnimation = useAnimation();
    const projectThreeRefAnimation = useAnimation();
    const projectsButtonRefAnimation = useAnimation();
    const [aboutTextRef, aboutTextRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [aboutImageRef, aboutImageRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [skillsRef, skillsRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [skillsTextRef, skillsTextRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [skillsetOneRef, skillsetOneRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [skillsetTwoRef, skillsetTwoRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [skillsetThreeRef, skillsetThreeRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const [projectsRef, projectsRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
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
    const [projectsButtonRef, projectsButtonRefView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    });
    const scrollVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
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
    const heroVariants = {
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
    const buttonVariants = {
        visible: {
            opacity: 1,
            x: 0,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
        hidden: {
            opacity: 0,
            x: -100,
        },
    };
    useEffect(() => {
        if (aboutTextRefView) {
            aboutTextRefAnimation.start("visible");
        }
    }, [aboutTextRefAnimation, aboutTextRefView]);
    useEffect(() => {
        if (aboutImageRefView) {
            aboutImageRefAnimation.start("visible");
        }
    }, [aboutImageRefAnimation, aboutImageRefView]);
    useEffect(() => {
        if (skillsRefView) {
            skillsRefAnimation.start("visible");
        }
    }, [skillsRefAnimation, skillsRefView]);
    useEffect(() => {
        if (skillsTextRefView) {
            skillsTextRefAnimation.start("visible");
        }
    }, [skillsTextRefAnimation, skillsTextRefView]);
    useEffect(() => {
        if (skillsetOneRefView) {
            skillsetOneRefAnimation.start("visible");
        }
    }, [skillsetOneRefAnimation, skillsetOneRefView]);
    useEffect(() => {
        if (skillsetTwoRefView) {
            skillsetTwoRefAnimation.start("visible");
        }
    }, [skillsetTwoRefAnimation, skillsetTwoRefView]);
    useEffect(() => {
        if (skillsetThreeRefView) {
            skillsetThreeRefAnimation.start("visible");
        }
    }, [skillsetThreeRefAnimation, skillsetThreeRefView]);
    useEffect(() => {
        if (projectsRefView) {
            projectsRefAnimation.start("visible");
        }
    }, [projectsRefAnimation, projectsRefView]);
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
        if (projectsButtonRefView) {
            projectsButtonRefAnimation.start("visible");
        }
    }, [projectsButtonRefAnimation, projectsButtonRefView]);
    return (
        <>
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
                                    direction: "top",
                                    out_mode: "out",
                                },
                            },
                        }}
                    />
                    <motion.div className="container" animate="visible" initial="hidden" variants={heroVariants}>
                        <h2 className="hero__title">Hi! I’m Denzel.</h2>
                        <motion.p
                            className="hero__text"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1, delay: 0.8 },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72,
                                },
                            }}
                        >
                            I’m a Web Developer based in Quezon City, Philippines.
                            <br className="is-pc" /> I enjoy creating well-designed, responsive, and accessible
                            websites.
                        </motion.p>
                        <motion.div
                            className="is-inline-block"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1.8 },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    opacity: 0,
                                    x: -100,
                                },
                            }}
                        >
                            <Link to="/contact" className="button hero__button">
                                Contact Me <BsArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="about">
                    <div className="container about__container">
                        <motion.div
                            className="about__details"
                            ref={aboutTextRef}
                            animate={aboutTextRefAnimation}
                            initial="hidden"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, when: "beforeChildren" },
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72,
                                },
                            }}
                        >
                            <h3 className="title about__title">About Me</h3>
                            <p className="about__text">
                                I'm passionate about the things that I do. I continuously seek knowledge from different
                                challenges and experiences. During my free time, I like to learn to keep myself
                                up-to-date with the latest technologies and find ways to further improve my skill set.
                            </p>
                            <motion.div className="is-inline-block" variants={buttonVariants}>
                                <Link to="/about" className="button about__button" variants={buttonVariants}>
                                    My Story <BsArrowRight />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="about__image"
                            ref={aboutImageRef}
                            animate={aboutImageRefAnimation}
                            initial="hidden"
                            variants={scrollVariants}
                        >
                            <Img fluid={data.headDp.childImageSharp.fluid} alt="Head Display Picture" />
                        </motion.div>
                    </div>
                </section>
                <section className="skills">
                    <div className="container">
                        <motion.h3
                            className="title title__center skills__title"
                            ref={skillsRef}
                            animate={skillsRefAnimation}
                            initial="hidden"
                            variants={scrollVariants}
                        >
                            Skills
                        </motion.h3>
                        <div className="skills__container">
                            <motion.p
                                className="skills__container__title"
                                ref={skillsTextRef}
                                animate={skillsTextRefAnimation}
                                initial="hidden"
                                variants={scrollVariants}
                            >
                                These are the main languages, frameworks / libraries, and tools that I use / have used.
                            </motion.p>
                            <div className="skills__container__content">
                                <motion.div
                                    className="skills__skillset"
                                    ref={skillsetOneRef}
                                    animate={skillsetOneRefAnimation}
                                    initial="hidden"
                                    variants={parentVariants}
                                >
                                    <h4 className="skills__skillset__title">Languages</h4>
                                    <ul className="skills__skillset__list">
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiHtml5 className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">HTML</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiCss3 className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">CSS</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiJavascript className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">JavaScript</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiTypescript className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">TypeScript</p>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    className="skills__skillset"
                                    ref={skillsetTwoRef}
                                    animate={skillsetTwoRefAnimation}
                                    initial="hidden"
                                    variants={parentVariants}
                                >
                                    <h4 className="skills__skillset__title">Frameworks / Libraries</h4>
                                    <ul className="skills__skillset__list">
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiReact className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">React</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiNextdotjs className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">Next.js</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiTailwindcss className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">Tailwind CSS</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiMaterialUi className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">Material UI</p>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    className="skills__skillset"
                                    ref={skillsetThreeRef}
                                    animate={skillsetThreeRefAnimation}
                                    initial="hidden"
                                    variants={parentVariants}
                                >
                                    <h4 className="skills__skillset__title">Tools</h4>
                                    <ul className="skills__skillset__list">
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiGit className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">Git</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiNpm className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">npm</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiNetlify className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">Netlify</p>
                                        </motion.li>
                                        <motion.li className="skills__skillset__item" variants={childVariants}>
                                            <SiFigma className="skills__skillset__icon" />
                                            <p className="skills__skillset__name">Figma</p>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="container projects__container">
                        <motion.h3
                            className="title title__center projects__title"
                            ref={projectsRef}
                            animate={projectsRefAnimation}
                            initial="hidden"
                            variants={scrollVariants}
                        >
                            Featured Projects
                        </motion.h3>
                        <ul className="projects__list">
                            <motion.li
                                className="projects__item"
                                ref={projectOneRef}
                                animate={projectOneRefAnimation}
                                initial="hidden"
                                variants={parentVariants}
                            >
                                <div className="projects__item__image">
                                    <a
                                        href="https://denzeltl-notes.netlify.app/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img
                                                fluid={data.projectNotes.childImageSharp.fluid}
                                                style={{ maxHeight: "21rem" }}
                                                alt="Screenshot of Notes App Project"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects__item__details">
                                    <motion.div className="projects__item__head" variants={childVariants}>
                                        <h4 className="projects__item__head__title">Notes App</h4>
                                        <p className="projects__item__head__date">July 2021</p>
                                    </motion.div>
                                    <motion.p className="projects__item__body" variants={childVariants}>
                                        Create your account to privately access your personal notes on any device.
                                        Features cloud syncing of notes and supports a few text styles with its markdown
                                        editor.
                                    </motion.p>
                                    <motion.div className="projects__item__foot" variants={childVariants}>
                                        <ul className="projects__item__foot__tools">
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Material UI</li>
                                            <li>Firebase</li>
                                        </ul>
                                        <ul className="projects__item__foot__links">
                                            <li>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href="https://github.com/denzeltl/notes-app"
                                                    target="_blank"
                                                >
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href="https://denzeltl-notes.netlify.app/"
                                                    target="_blank"
                                                >
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li
                                className="projects__item"
                                ref={projectTwoRef}
                                animate={projectTwoRefAnimation}
                                initial="hidden"
                                variants={parentVariants}
                            >
                                <div className="projects__item__image">
                                    <a
                                        href="https://chess-notation-trainer.netlify.app/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img
                                                fluid={data.projectChess.childImageSharp.fluid}
                                                style={{ maxHeight: "21rem" }}
                                                alt="Screenshot of Chess Notation Trainer Project"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects__item__details">
                                    <motion.div className="projects__item__head" variants={childVariants}>
                                        <h4 className="projects__item__head__title">Chess Notation Trainer</h4>
                                        <p className="projects__item__head__date">May 2021</p>
                                    </motion.div>
                                    <motion.p className="projects__item__body" variants={childVariants}>
                                        Train yourself to visualize chess coordinates quickly with this app.
                                        Familiarizing yourself with the notations can be very beneficial when learning
                                        how to play chess as it helps you identify positions fast.
                                    </motion.p>
                                    <motion.div className="projects__item__foot" variants={childVariants}>
                                        <ul className="projects__item__foot__tools">
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Material UI</li>
                                            <li>PWA</li>
                                        </ul>
                                        <ul className="projects__item__foot__links">
                                            <li>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href="https://github.com/denzeltl/chess-notation-trainer"
                                                    target="_blank"
                                                >
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href="https://chess-notation-trainer.netlify.app/"
                                                    target="_blank"
                                                >
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                            <motion.li
                                className="projects__item"
                                ref={projectThreeRef}
                                animate={projectThreeRefAnimation}
                                initial="hidden"
                                variants={parentVariants}
                            >
                                <div className="projects__item__image">
                                    <a href="https://time-until.netlify.app/" rel="noopener noreferrer" target="_blank">
                                        <div className="overlay"></div>
                                        <div className="text">
                                            <p>
                                                Visit Site <FiExternalLink />
                                            </p>
                                        </div>
                                        <div className="image-container">
                                            <Img
                                                fluid={data.projectTime.childImageSharp.fluid}
                                                style={{ maxHeight: "21rem" }}
                                                alt="Screenshot of Time Until Project"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="projects__item__details">
                                    <motion.div className="projects__item__head" variants={childVariants}>
                                        <h4 className="projects__item__head__title">Time Until</h4>
                                        <p className="projects__item__head__date">March 2021</p>
                                    </motion.div>
                                    <motion.p className="projects__item__body" variants={childVariants}>
                                        Display a countdown timer in days in your local time zone or specify a
                                        particular country to display in their time zone.
                                    </motion.p>
                                    <motion.div className="projects__item__foot" variants={childVariants}>
                                        <ul className="projects__item__foot__tools">
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Material UI</li>
                                        </ul>
                                        <ul className="projects__item__foot__links">
                                            <li>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href="https://github.com/denzeltl/time-until"
                                                    target="_blank"
                                                >
                                                    <SiGithub />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href="https://time-until.netlify.app/"
                                                    target="_blank"
                                                >
                                                    <FiExternalLink />
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.li>
                        </ul>
                        <motion.div
                            className="is-inline-block"
                            ref={projectsButtonRef}
                            animate={projectsButtonRefAnimation}
                            initial="hidden"
                            variants={buttonVariants}
                        >
                            <Link to="/projects" className="button projects__button">
                                View More <BsArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </Layout>
            <Footer title="Home" />
        </>
    );
};

export default IndexPage;
