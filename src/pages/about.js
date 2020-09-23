import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/about-page.scss';

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            bodyDp: file(relativePath: { eq: "body-display-picture.png" }) {
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
                        Hello! I’m Denzel Tiam-Lee, a web developer based in Quezon City, Philippines. I enjoy creating well-designed, responsive, and accessible websites by writing clean and
                        maintenable code.
                    </p>
                </div>
            </section>
            <section className="about-page__background">
                <div className="container about-page__background__container">
                    <div className="about-page__background__text">
                        <h3 className="title">Background</h3>
                        <p className="about-page__background__p">
                            I went to college at University of Santo Tomas and graduated with a degree in BS Entrepreneurship. Shortly after graduating, I got an offer in a BPO company as a processing
                            associate wherein we process loan mortgages on a daily basis. I decided to shift my career because I’ve always been curious with how the web works. My curiosity and desire
                            to take on challenges motivated me to study web development.
                        </p>
                        <p className="about-page__background__p">
                            I started teaching myself web development on July 2018 and has continuously been learning since then. The main resources I use are{' '}
                            <span className="is-italic">YouTube</span> videos, online courses from <span className="is-italic">Udemy</span> and <span className="is-italic">CodeCademy</span>, and
                            coding bootcamps such as <span className="is-italic">freeCodeCamp</span> and <span className="is-italic">The Odin Project</span>. On October 2019, I landed a projessional
                            job as a web developer.
                        </p>
                    </div>
                    <div className="about-page__background__image">
                        <Img fluid={data.bodyDp.childImageSharp.fluid} alt="Head Display Picture" />
                    </div>
                </div>
            </section>
            <section className="about-page__experience">
                <div className="container">
                    <h3 className="title title__center">Experience</h3>
                    <div className="about-page__experience__container">
                        <ul className="about-page__experience__tabs">
                            <li className="about-page__experience__tab">
                                <button className="about-page__experience__button">
                                    <p>LH & C</p>
                                </button>
                            </li>
                            <li className="about-page__experience__tab">
                                <button className="about-page__experience__button">
                                    <p>BOS</p>
                                </button>
                            </li>
                            <li className="about-page__experience__tab">
                                <button className="about-page__experience__button">
                                    <p>Shoti's</p>
                                </button>
                            </li>
                        </ul>
                        <div className="about-page__experience__work">
                            <h4>Web Developer</h4>
                            <h5>
                                at <span>LH & Creatives</span>
                            </h5>
                            <p>August 2019 - Present</p>
                            <ul>
                                <li>Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lore</li>
                                <li>Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lore</li>
                                <li>Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lore</li>
                                <li>Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lorem ipsum asdafsadasf Lore</li>
                            </ul>
                        </div>
                        <div className="about-page__experience__work">
                            <h4>Processing Associate</h4>
                            <h5>
                                at <span>Boutique Outsource Solutions</span>
                            </h5>
                            <p>November 2017 – August 2019</p>
                            <ul>
                                <li>Provide a high level of accurate and efficient data entry to assist the needs of the counterparts located in Queensland, Australia</li>
                                <li>Process, translate, and input corresponding data into 3rd party systems</li>
                                <li>Merge and prepare document packs that are to be sent and signed by the clients</li>
                                <li>Meet daily service agreement goals in production and turnaround times</li>
                            </ul>
                        </div>
                        <div className="about-page__experience__work">
                            <h4>Owner / Manager</h4>
                            <h5>
                                at <span>Shoti’s Dimsum House</span>
                            </h5>
                            <p>October 2015 – July 2017</p>
                            <ul>
                                <li>Handle and manage food stall</li>
                                <li>Analyze sales forecasts to develop specific objectives</li>
                                <li>Plan and implement sales strategies</li>
                                <li>Foster strong working relationship with employees</li>
                                <li>Efficiently cater customers’ needs and wants</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
