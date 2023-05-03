import React from "react";
import styled from "styled-components";
import phone from './image/back.svg';
import you from './image/phone.png'


const Generation = () =>{
    return(
        <Wrapper>
                <div className="gen">
                    <div className="text">
                        <h1>Next generation <br />digital banking.</h1>
                        <p>Take your financial life online. Your Easybank account</p>
                        <p>Will be a one-step shop for spending, saving,</p> 
                        <p>budgeting, investing and much more.</p>
                    </div>
                    <div className="pics">
                        <img src={you} alt="" />
                    </div>
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    .pics{
        background: url(${phone});
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat;
        /* background-position: right; */
    }

    .gen{
    background-color: gainsboro;
    width: 100%;
    /* height:100vh; */
    display: flex;
    justify-content: space-around;
    /* padding: 30px 0; */
}
.pics img{
    height: 100vh;
    display:flex;
    justify-self:center;
}
.text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    width:100%;
}
.text p{
    font-size: larger;
    font-weight: 500;
    font-style: oblique;
}
.text h1{
    font-size: xx-large;
}
@media screen and (max-width:950px) {
    .gen{
        flex-direction: column-reverse;
    }
    .pics{
        width:100%;
    }
    .pics img{
        width:100%;
    }
    
    
}

`

export default Generation;