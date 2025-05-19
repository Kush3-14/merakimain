import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="container-xxl bg-white p-0">

        {/* Projects Start */}
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Projects<span></span></p>
                    <h1 className="text-center mb-5">Recently Completed Projects</h1>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="mx-2 active" data-filter="*">All</li>
                            <li className="mx-2" data-filter=".first">Web Design</li>
                            <li className="mx-2" data-filter=".second">Graphic Design</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/assets/img/portfolio-1.jpg" alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/assets/img/portfolio-2.jpg" alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/assets/img/portfolio-3.jpg" alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/assets/img/portfolio-4.jpg" alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/assets/img/portfolio-5.jpg" alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/assets/img/portfolio-6.jpg" alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Projects End */}

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

export default Project;