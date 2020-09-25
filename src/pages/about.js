import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { HiChevronRight } from 'react-icons/hi';

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
    const jobs = [
        {
            slug: 'LH & C',
            position: 'Web Developer',
            company: 'LH & Creatives',
            date: 'October 2019 - Present',
            duties: [
                'Build both interactive and responsive websites based from the provided design material',
                'Create and use custom data from CMS like Wordpress for dynamic content updating',
                "Revise finished projects to meet client's expectations",
                'Provide assistance to other team members by checking their work and making sure that all instructions are followed',
                'Ensure work done is of high quality by adhering to company coding standards',
            ],
        },
        {
            slug: 'BOS',
            position: 'Processing Associate',
            company: 'Boutique Outsource Solutions',
            date: 'November 2017 – August 2019',
            duties: [
                'Provide a high level of accurate and efficient data entry',
                'Process, translate, and input corresponding data into third party systems',
                'Merge and prepare document packs that are to be sent and signed by the clients',
                'Meet daily service agreement goals in production and turnaround times',
                'Maintain a high level of confidentiality and discretion over sensitive documents',
            ],
        },
        {
            slug: "Shoti's",
            position: 'Owner / Manager',
            company: 'Shoti’s Dimsum House',
            date: 'October 2015 – July 2017',
            duties: [
                'Handle and manage food stall',
                'Analyze sales forecasts to develop specific objectives',
                'Plan and implement sales strategies',
                'Foster strong working relationship with employees',
                'Efficiently cater customers’ needs and wants',
            ],
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    return (
        <Layout>
            <SEO title="About" />
            <section className="headline">
                <div className="container">
                    <h2 className="title title__center">About Me</h2>
                    <p className="headline__text">
                        Hello! I’m Denzel Tiam-Lee, a web developer based in Quezon City, Philippines. I enjoy creating well-designed, responsive, and accessible websites by means of writing clean and
                        maintenable code.
                    </p>
                </div>
            </section>
            <section className="about-page__background">
                <div className="container about-page__background__container">
                    <div className="about-page__background__text">
                        <h3 className="title">Background</h3>
                        <p className="about-page__background__p">
                            I went to college at University of Santo Tomas and graduated with a degree in BS Entrepreneurship. Shortly after graduating, I got hired as a processing associate in a BPO
                            company. Eventually, I have decided to shift careers because I’ve always been curious with how the web works. My curiosity and desire to take on challenges motivated me to
                            study web development.
                        </p>
                        <p className="about-page__background__p">
                            I started teaching myself on July 2018 and has continuously been learning since then. The main resources I use for studying are{' '}
                            <span className="is-italic">Stack Overflow</span>, <span className="is-italic">YouTube</span> videos, online courses from <span className="is-italic">Udemy</span> and{' '}
                            <span className="is-italic">Codecademy</span>, and coding bootcamps such as <span className="is-italic">freeCodeCamp</span> and{' '}
                            <span className="is-italic">The Odin Project</span>. On October 2019, I've landed my first projessional job as a web developer.
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
                            {jobs.map((job, index) => {
                                return (
                                    <li key={index} className={`about-page__experience__tab ${activeTab === index ? 'is-active' : ''}`}>
                                        <button onClick={() => setActiveTab(index)} className="about-page__experience__button">
                                            <p>{job.slug}</p>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        {jobs.map((job, index) => {
                            return (
                                <div key={index} className={`about-page__experience__work ${activeTab === index ? 'is-active' : ''}`}>
                                    <h4 className="about-page__experience__position">{job.position}</h4>
                                    <h5 className="about-page__experience__company">
                                        at <span>{job.company}</span>
                                    </h5>
                                    <p className="about-page__experience__date">{job.date}</p>
                                    <ul className="about-page__experience__duties">
                                        {job.duties.map((duty, index) => (
                                            <li className="about-page__experience__duty" key={index}>
                                                <HiChevronRight />
                                                <p>{duty}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
