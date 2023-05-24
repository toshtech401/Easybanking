import React from "react";
import styled from "styled-components";
import currency from "../Images/currency.jpg";
import restaurant from "../Images/restaurant.jpg";
import plane from "../Images/plane.jpg";
import confetti from "../Images/confetti.jpg"


const Articles = () =>{
    return(
        <Wrapper>
            <div>
                <div className="where">
                <div>
                    <h1>Latest Articles</h1>
                </div>
                <div className="photo">
                    <div className="what">
                        <img src={currency} alt="" />
                        <div>
                            <p>By Claire Rokshon</p>
                            <h3>Receive Money in any <br />currency with no fees.</h3>
                            <p>The world is getting smaller and <br />we're becoming more mobile. So <br />why should you be forced to only <br />receive money in a single.</p>
                        </div>
                    </div>
                    <div className="what">
                        <img src={restaurant} alt="" />
                        <div>
                            <p>By wilson hotten</p>
                            <h3>Treat your self without <br />worrying about money</h3>
                            <p>Our simple budgeting features <br />allows you to seperate out your <br />spendimg and set realistic limits <br />each month. That means you....</p>
                        </div>
                    </div>
                    <div className="what">
                        <img src={plane} alt="" />
                        <div>
                            <p>By Wilson Hotton</p>
                            <h3>Take your Easybank card <br />everywhere you go</h3>
                            <p>We want you to enjoy your travels. <br />This is why we don't charge any <br />fees on purchese while you're <br />Abroad. We'll even show you...</p>
                        </div>
                    </div>
                    <div className="what">
                        <img src={confetti} alt="" />
                        <div>
                            <p>By Claire Robinson</p>
                            <h3>Our Invite-only Beta <br />accounts are now lives</h3>
                            <p>After alot of hard work by the <br />whole teams, we're excited to launch <br />our closed Beta. It's easy to request <br />and invite through the site..</p>
                        </div>
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
.photo{
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
}
.what img{
    height: 30vh;
}
.what img:hover{
    opacity: 50%;
}
.where{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.what h3:hover{
    color: green;
    cursor: grab;
}

@media screen and (max-width:950px) {
    .photo{
        flex-direction: column;
    }
    .what img{
        width:100%;
    }
    
}
`

export default Articles;