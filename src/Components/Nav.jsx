import React from "react";
import styled from "styled-components";
import { useState } from "react";
import open from "./image/open.svg"
import close from "./image/close.svg"


const Nav = () =>{

    const [openToggle, setOpenToggle] = useState(false);
    
    const handleToggle = () => {
        setOpenToggle(!openToggle)
    }

    return(
        <Wrapper>
                    <div>
            <nav>
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div>
                   <ol>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                   </ol>
                </div>
                <div>
                    <button className="easy">easybank</button>
                </div>
                <button onClick={handleToggle} className="toggle">
                  {
                    openToggle ? <img src={close} alt="" /> : <img src={open} alt="" />
                  }
                </button>
            </nav>
            <div className={`${openToggle ? 'nav-mobile nav-mobile-sub' : 'nav-mobile'}`}> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
}
ol{
    display: flex;
    gap: 25px;
}
li{
    list-style: none;
    font-size: larger;
    font-weight: 500;
}
nav li:hover{
    cursor: pointer;
}
nav li::after, nav li::before {
    content: '';
    width: 0%;
    height: 2px;
    background: green;
    display: block;
    transition: 0.5s;
  }
  
nav li:hover::after, nav li:hover::before {
    width: 100%;
  }
  button{
    background-image: linear-gradient(to left, green, lightgreen);
    padding: 15px 30px;
    border-radius: 10px;
    color: black;
    border: none;
    font-size: 20px;
  }
  /* .Navbar-links{
    display: none;
  }
  .navbar-links {
    display: none;
  } */
  .nav-mobile{
    display: none;
  }
  .toggle{
    display: none;
  }
  
  @media screen and (max-width: 950px) {
    ol{
        display: none;
    
  }
  .easy{
    display: none;
  }
  .toggle{
    display: block;
  }
  .nav-mobile{
    display: block;
    background-color: white;
    transition: .7s ease-in-out;
    /* padding:30px 0; */
    height: 0;
    overflow: hidden;
  }
  .nav-mobile-sub{
    height: 35vh;
    padding:30px 0;
  }
  .nav-mobile li{
    color: black;
  }
  .nav-mobile:hover{
    cursor:pointer;
  }
  }
`
export default Nav;