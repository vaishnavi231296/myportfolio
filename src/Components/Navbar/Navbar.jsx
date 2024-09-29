import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/vk-logo.jpg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
  <div className = 'navbar'>
   <img src={logo} height="7%" width="7%" alt=""/>
   <img alt="" className='nav-mob-open'/>
   <ul className="nav-menu">
    <img src={menu_close} alt="" className="nav-mob-close" />
    <li><AnchorLink className='anchor-link' href='#home'><p onClick={() =>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt= ''/>: <></> }</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() =>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} alt= ''/>: <></> }</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() =>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt= ''/>: <></> }</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() =>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt= ''/>: <></> }</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt= ''/>: <></> }</li>
   </ul>
   <div className="nav-connect">
   <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me
   </AnchorLink>
   </div>
   </div>
  )
  
}

export default Navbar