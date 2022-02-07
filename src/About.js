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
                          <div className="about mb-5">
                              <h3 className="page-title py-2">About</h3>
                              <div className="content border rounded bg-white p-3">
                                  <h6>Paragraph 1</h6>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt. Tenetur suscipit necessitatibus tempora consequatur id, sed perspiciatis, voluptatem eum consectetur, numquam minus quidem laboriosam commodi magni dolore velit explicabo!
                                  </p>
                                  <h6>Paragraph 2</h6>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt. Tenetur suscipit necessitatibus tempora consequatur id, sed perspiciatis, voluptatem eum consectetur, numquam minus quidem laboriosam commodi magni dolore velit explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid consectetur praesentium aperiam mollitia iste reprehenderit voluptas, deserunt culpa ipsum reiciendis iusto facilis quis? Quaerat neque officiis odit blanditiis beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sapiente ipsa corrupti ipsam voluptate laboriosam ratione placeat voluptates quisquam dolores! Exercitationem id repellendus molestias repellat et eveniet laudantium nulla delectus.
                                  </p>
                                  <h6>Paragraph 3</h6>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt. Tenetur suscipit necessitatibus tempora consequatur id, sed perspiciatis, voluptatem eum consectetur, numquam minus quidem laboriosam commodi magni dolore velit explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae tenetur explicabo consectetur eos alias maxime, optio pariatur! Ipsum culpa alias provident, illo natus eaque consequatur tempora tenetur eveniet corrupti!
                                  </p>
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