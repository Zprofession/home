import React from "react";
import web from "../src/Images/web developer cartoon.png"
import { NavLink } from "react-router-dom";
const Home = () => {
    return(
        <>
            <section id="header" className="d-flex justify-content-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto pt-5">
                           <div className="row">
                                <div className="col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h3>Get Your Professional Website with <strong class="brand-name">Zprofession</strong></h3>
                                    <h5 className="my-3">Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development. I will bring up the digital solutions to your company problems</h5>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-3 pt-lg-0 p-5 order-1 order-lg-2 header-img">
                                    <img src={web} alt="Header Image" className="img-fluid animated"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;