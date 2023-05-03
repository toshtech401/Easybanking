import React from "react";
import Nav from "../Components/Nav";
import Generation from "./Generation";
import Choose from "./Choose";
import Articles from "./Articles";
import Footer from "./Footer";


const Body = () =>{
    return(
        <div>
            <Nav/>
            <Generation/>
            <Choose/>
            <Articles/>
            <Footer/>
        </div>
    )
}

export default Body;