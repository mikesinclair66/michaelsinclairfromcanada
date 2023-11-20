import marginLeftAllocator from '../modules/marginLeftAllocator';
import marginRightAllocator from '../modules/marginRightAllocator';
import * as Icon from 'react-bootstrap-icons';

import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

let underline = { textDecoration: "underline" };

const Component = () => {
    return (
        <footer className="text-center text-lg-start bg-white text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span style={ marginLeftAllocator.tabQuantity }>
                        Get connected with us on social networks:
                    </span>
                    <a href="" className="me-4 link-secondary" style={ marginLeftAllocator.tabQuantity }>
                        <Icon.Facebook />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Twitter />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Instagram />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Linkedin />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Github />
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <Icon.Gem /> Michael Sinclair
                            </h6>
                            <p>
                                Why do I brand myself with a diamond? I love the feeling I get
                                when someone gives me a high-value item and I want to present that
                                feeling to the clients.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Settings
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Navigation
                            </h6>
                            <p>
                                <Nav.Link as={Link} to="/" style={ underline }>Home</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link as={Link} to="/roadmap" style={ underline }>My Values</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link as={Link} to="/developments" style={ underline }>Developments</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link as={Link} to="/designs" style={ underline }>Designs</Nav.Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <Nav.Link as={Link} to="/contact">
                                <h6 className="text-uppercase fw-bold mb-4" style={ underline }>Contact</h6>
                            </Nav.Link>
                            <p><Icon.House style={ marginRightAllocator.defaultQuantity } /> The Fraser Valley, BC, Canada</p>
                            <p>
                                <Icon.Phone />
                                <button className="btn btn-link text-reset">Text Me</button>
                            </p>
                            <p>
                                <Icon.Envelope />
                                <button className="btn btn-link text-reset">Email Me</button>
                            </p>
                            <p>
                                <Nav.Link as={Link} to="/sign-up">
                                    <Icon.Newspaper />
                                    <button className="btn btn-link text-reset">Sign Up</button>
                                </Nav.Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
                <div>&#169; Copyright 2013 - 2023 | Michael Sinclair | All Rights Reserved</div><br />
                <div className="text-center">
                    <a href="" className="me-4 link-secondary">
                        <Icon.Facebook />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Twitter />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Instagram />
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <Icon.Linkedin />
                    </a>
                    <a href="" className="me link-secondary">
                        <Icon.Github />
                    </a><br /><br />
                </div>
                <div className="fw-bold">Powered by Intiva Technologies</div>
            </div>
        </footer>
    );
};

export default Component;