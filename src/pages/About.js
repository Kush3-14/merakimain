import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container-xxl bg-white p-0">
        {/* Feature Start */}
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h5 className="mb-3">Digital Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-search text-primary mb-4"></i>
                            <h5 className="mb-3">SEO & Backlinks</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                            <h5 className="mb-3">Design & Development</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Feature End */}

        {/* About Start */}
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary">About Us<span></span></p>
                        <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                        <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Digital Marketing</p>
                                <p className="mb-2">85%</p>
                            </div>
                            <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">SEO & Backlinks</p>
                                <p className="mb-2">90%</p>
                            </div>
                            <div className="progress">
                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Design & Development</p>
                                <p className="mb-2">95%</p>
                            </div>
                            <div className="progress">
                            <div className="progress-bar bg-dark" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link to="" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</Link>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="/assets/img/about.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}

        {/* Facts Start */}
        <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Years Experience</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Team Members</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Complete Projects</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Facts End */}

        {/* Team Start */}
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                    <h1 className="text-center mb-5">Our Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="/assets/img/team-1.jpg" alt="" />
                                <h5>John Doe</h5>
                                <span>CEO & Founder</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="/assets/img/team-2.jpg" alt="" />
                                <h5>Jessica Brown</h5>
                                <span>Web Designer</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="/assets/img/team-3.jpg" alt="" />
                                <h5>Tony Johnson</h5>
                                <span>SEO Expert</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Team End */}

        {/* Footer Start */}
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <Link className="btn btn-link" to="">About Us</Link>
                        <Link className="btn btn-link" to="">Contact Us</Link>
                        <Link className="btn btn-link" to="">Privacy Policy</Link>
                        <Link className="btn btn-link" to="">Terms & Condition</Link>
                        <Link className="btn btn-link" to="">Career</Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-1.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-2.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-3.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-4.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-5.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-6.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: "48px"}} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="#">Your Site Name</Link>, All Right Reserved. 
                            Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="">Home</Link>
                                <Link to="">Cookies</Link>
                                <Link to="">Help</Link>
                                <Link to="">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}

        {/* Back to Top */}
        <Link to="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  );
}

export default About;