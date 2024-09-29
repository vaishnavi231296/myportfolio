import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return(
  <div id='home' className='hero'>
    <img src={profile_img} height="15%" width="15%" alt=""/>
    <h1><span>I'm Vaishnavi Kandoi,</span> Full stack Developer.</h1>
    <p>I am a full stack developer from India.I have 3+ years of experience in ASP.NET Web Application Development. Currently I'm enrolled in Software Enginnering Technology Fast-Track Program  in Centennial college, Canada.</p>
    <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume" >
        <a classname='resume-download'
        href='../../assets/Resume_Vaishnavi_Kandoi.pdf' 
        download="Resume_Vaishnavi_Kandoi.pdf" 
        style={{ textDecoration: 'none' }}
      >
          My Resume</a></div>  
    </div>
   </div>
  )
  
}

export default Hero