import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img2.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} height="85%" width="90%" alt="" />

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Experienced ASP.NET Developer with over 3 years of expertise in building dynamic web applications using C#, JavaScript, React, and SQL Server. Proven track record of delivering efficient, scalable solutions, and adept at collaborating in Agile environments to meet client and business needs.</p>
                        <p>I am deeply passionate about software development, constantly driven by the challenge of transforming complex ideas into impactful, user-friendly applications. I thrive on continuous learning and enjoy experimenting with new technologies, always aiming to enhance my skills and create innovative solutions.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width: "50%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{width: "70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>ASP.Net</p><hr style={{width: "90%"}}/>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )

}

export default About