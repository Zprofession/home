import React from "react";
import ProjectsCard from "./ProjectsCard";
import perfume from "../src/Images/perfume.webp"
import ultramod from "../src/Images/ultramod.webp"
import anthem from "../src/Images/anthem.webp"
import boston from "../src/Images/boston.webp"
import cedge from "../src/Images/cedge.webp"
import danedits from "../src/Images/danedits.webp"
import inchipde from "../src/Images/inchipde.webp"
import pimage01 from "../src/Images/pimage01.png"
import pimage02 from "../src/Images/pimage02.png"
import pimage03 from "../src/Images/pimage03.png"
import pimage04 from "../src/Images/pimage04.png"
import pimage05 from "../src/Images/pimage05.png"
import kimberly from "../src/Images/kimberly.webp"
import ukaligner from "../src/Images/ukaligner.webp"
import ultramoddashboard from "../src/Images/ultramoddashboard.webp"
import ultramoddashboard2 from "../src/Images/ultramoddashboard2.webp"

const Projects = (props) => {
    return(
        <>

            <section id="header" className="d-flex justify-content-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                          <div className="projects pb-5">
                              <h3 className="page-title py-2">Projects</h3>
                              <div className="row">
                                    
                                    <ProjectsCard img={perfume}/>                                                
                                    <ProjectsCard img={ultramod}/>                                                
                                    <ProjectsCard img={anthem}/>                                                
                                    <ProjectsCard img={boston}/>                                                
                                    <ProjectsCard img={cedge}/>                                                
                                    <ProjectsCard img={danedits}/>                                                
                                    <ProjectsCard img={inchipde}/>                                                
                                    <ProjectsCard img={pimage01}/>                                                
                                    <ProjectsCard img={pimage02}/>                                                
                                    <ProjectsCard img={pimage03}/>                                                
                                    <ProjectsCard img={pimage04}/>                                                
                                    <ProjectsCard img={pimage05}/>                                                
                                    <ProjectsCard img={kimberly}/>                                                
                                    <ProjectsCard img={ukaligner}/>                                                
                                    <ProjectsCard img={ultramoddashboard}/>                                                
                                    <ProjectsCard img={ultramoddashboard2}/>                                                

                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Projects;