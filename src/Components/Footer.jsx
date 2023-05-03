import React from "react";
import styled from "styled-components";


const Footer = () =>{
    return(
        <Wrapper>
            <div className="foot">
                <div className="feet">
                    <div className="say">
                    <div className="salam">
                        <div>
                            <img src="/images/logo.svg" alt="" />
                        </div>
                        <div className="bag">
                            <img src="/images/facebook.svg" alt="" />
                            <img src="/images/youtube.svg" alt="" />
                            <img src="/images/twitter.svg" alt="" />
                            <img src="/images/pinterest.svg" alt="" />
                            <img src="/images/instagram.svg" alt="" />
                        </div>
                    </div>
                    <div className="now">
                        <ul>
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="now">
                        <ul>
                            <li>Careers</li>
                            <li>Support</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    </div>
                    <div>
                        <div className="req">
                        <button>Request Invite</button>
                        </div>
                        <div>
                        </div>
                    </div>
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
.foot{
    background-color: #008080;
    width: 100%;
    margin-top: 30px;
}
.feet{
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
}
.say{
    display: flex;
    gap: 30px;
    color: white;
    align-items: center;
}
.salam{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.bag img svg:hover{
    color: green;
}
.now ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}
.now li{
    list-style: none;
}
.now ul li:hover{
    cursor: grabbing;
    color: lawngreen;
}
.bag{
    display: flex;
    gap: 10px;
}
.req button {
    background-image: linear-gradient(to left, green, lightgreen);
        color: #fff;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 20px 30px;
    perspective: 30rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);
    cursor: pointer;
  }
  
  .req button::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: linear-gradient(320deg, rgba(0, 140, 255, 0.678), rgba(128, 0, 128, 0.308));
    z-index: 1;
    transition: background 3s;
  }
  
.req button:hover::before {
    animation: rotate 1s;
    transition: all .5s;
  }
  
  @keyframes rotate {
    0% {
      transform: rotateY(180deg);
    }
  
    100% {
      transform: rotateY(360deg);
    }
  }
@media screen and (max-width:950px) {
    .say{
        flex-direction: column;
    }
    .feet{
        flex-direction: column;
        gap: 30px;
    }
}

`

export default Footer;