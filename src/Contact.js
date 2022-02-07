import React from "react";
import web from "../src/Images/web developer cartoon.png"
import { NavLink } from "react-router-dom";
const About = () => {
    return(
        <>
            <section id="header" className="d-flex justify-content-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                          <div className="about">
                              <h3 className="page-title py-2">Contact</h3> 
                              <div className="row">
                                <div className="col-sm-6 mx-auto">
                                    <div className="message-card border rounded p-3 m-3">
                                        <form action="">
                                            
                                            <div className="form-group m-3">
                                                <input class="form-control" type="text" placeholder = "Name" name="Name"/>
                                            </div>

                                            <div className="form-group m-3">
                                                <input class="form-control" type="email" placeholder = "Email" name="Email"/>
                                            </div>

                                            <div className="form-group m-3">
                                                <textarea class="form-control" placeholder="Message" cols="30" rows="3" name="Message"/>
                                            </div>

                                            <div className="form-group m-3">
                                                <input class="form-control btn btn-primary" type="submit" value="Send" />
                                            </div>
                                                
                                        </form>
                                    </div>
                                </div>
                              </div>
                        
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;