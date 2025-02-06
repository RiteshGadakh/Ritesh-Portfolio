import React from 'react';
import '../CSS/style.css';
import checkmark from '../assets/checkmark.png';

const Experience = () => {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div class="details-container">
                        <h2 class="experience-sub-title">Frontend Development</h2>
                        <div class="article-container">
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>HTML</h3>
                              
                                </div>
                            </article>

                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>CSS</h3>
                              
                                </div>
                            </article>

                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>JavaScript</h3>
                              
                                </div>
                            </article>

                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>React</h3>
                              
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Bootstrap-5</h3>
                              
                                </div>
                            </article>

                        </div>
                    </div>

                    <div class="details-container">
                        <h2 class="experience-sub-title">Backend Development</h2>
                        <div class="article-container">
                        <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>NodeJs</h3>
                              
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>ExpressJs</h3>
                              
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Java</h3>
                              
                                </div>
                            </article>

                        </div>
                    </div>

                    <div class="details-container">
                        <h2 class="experience-sub-title">Database</h2>
                        <div class="article-container">
                        <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>MongoDB</h3>
                              
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>MySQL</h3>
                              
                                </div>
                            </article>

                        </div>
                    </div>

                    <div class="details-container">
                        <h2 class="experience-sub-title">Essential</h2>
                        <div class="article-container">
                        <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Git & Github</h3>
                              
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Terminal Commands</h3>
                              
                                </div>
                            </article>
                            <article>
                                <img
                                    src={checkmark}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Deployment</h3>
                              
                                </div>
                            </article>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
