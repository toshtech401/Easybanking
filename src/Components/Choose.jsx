import React from "react";
import "./Choose.css"
import styled from "styled-components";


const Choose = () =>{
    return(
        <Wrapper>
            <div>
                <div className="toget">
                    <div>
                    <h1>Why you choose Easybank?</h1>
                    <p>We imergies Open Banking to turn bank account into your financial hub. <br />Control your finances like never before.</p>
                    </div>
                    <div className="app">
                        <div>
                            <img src="/images/online.svg" alt="" />
                            <h3>Online Banking</h3>
                            <p>Our modern web and mobile <br />applications allow you to keep <br />tracks of your finances whereevrr you <br />are in the world</p>
                        </div>
                        <div>
                            <img src="/images/budget.svg" alt="" />
                            <h3>Simple Budgeting</h3>
                            <p>See exactly where your money <br />goes Each month. Receive <br />notifications when you are close to <br />hitting your limits</p>
                        </div>
                        <div>
                            <img src="/images/board.svg" alt="" />
                            <h3>Fast On boarding</h3>
                            <div>
                                <p>We don't dp barnches. Open your <br /> account in minutes online and start <br />taking controls of your finances <br />right now.</p>
                            </div>
                        </div>
                        <div>
                            <img src="/images/api.svg" alt="" />
                            <h3>Open Api</h3>
                            <div>
                                <p>Manage your savings, investments, <br />pensions and much more from one <br />account. Tracking your money has <br />never been easir.</p>
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
.app{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    width: 100%;
    gap: 50px;
    /* text-align: 0; */
}
.toget{
    background-color: grey;
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    min-height: 100vh;
}
@media screen and (max-width:950px) {
    .app{
        flex-direction: column;
    }
    
}
`
export default Choose;