import React from "react";
import ServicesCard from "./ServicesCard";
const Services = (props) => {
    return(
        <>
             <section id="header" className="d-flex justify-content-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                          <div className="services pb-5">
                              <h3 className="page-title py-2">Services</h3>
                              <div className="row">
                                    
                                    <ServicesCard cardTitle="UX/UI Designing" cardDescription="The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective."/>      

                                    <ServicesCard cardTitle="Web Designing" cardDescription="Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development."/>   

                                    <ServicesCard cardTitle="Web Development" cardDescription="Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."/>

                                    <ServicesCard cardTitle="Graphic Designing" cardDescription="Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives."/>                                    
                                    <ServicesCard cardTitle="Microsoft Office" cardDescription="Microsoft Office is a suite of applications designed to help with productivity and completing common tasks on a computer. You can create and edit documents containing text and images, work with data in spreadsheets and databases, and create presentations and posters."/>

                                    <ServicesCard cardTitle="Data Analytics" cardDescription="Analytics is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data."/>                                    
                                                                        

                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
export default Services;