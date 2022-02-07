import React from "react";

const ProjectsCard = (props) => {
    return(
        <>
            <div className="col-md-6">
                <div className="project rounded p-0 my-3">
                    <img src={props.img} alt="" class="project-img img-fluid" />
                </div>
            </div>

        </>
    )
}
export default ProjectsCard;