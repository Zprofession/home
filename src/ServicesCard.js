import React from "react";

const ServiceCard = (props) => {
    return(
        <>
            <div className="col-lg-4">
                <div className="service border rounded bg-white p-3 my-3">
                    <h6 className="text-center"><b>{props.cardTitle}</b></h6>
                    <div className="service-content">
                        <p>{props.cardDescription}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ServiceCard;