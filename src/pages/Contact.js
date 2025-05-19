import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container-xxl bg-white p-0">

        {/* Contact Start */}
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
                    <h1 className="text-center mb-5">Contact For Any Query</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact End */}

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
                            <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-twitter"></i></Link>
                            <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-instagram"></i></Link>
                            <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <Link to="/about" className="btn btn-link">About Us</Link>
                        <Link to="/contact" className="btn btn-link">Contact Us</Link>
                        <Link to="/privacy" className="btn btn-link">Privacy Policy</Link>
                        <Link to="/terms" className="btn btn-link">Terms & Condition</Link>
                        <Link to="/career" className="btn btn-link">Career</Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-1.jpg" alt="Portfolio 1" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-2.jpg" alt="Portfolio 2" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-3.jpg" alt="Portfolio 3" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-4.jpg" alt="Portfolio 4" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-5.jpg" alt="Portfolio 5" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/assets/img/portfolio-6.jpg" alt="Portfolio 6" />
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
                            &copy; <Link className="border-bottom" to="/">Your Site Name</Link>, All Right Reserved. 
                            Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link>
                                <Link to="/cookies">Cookies</Link>
                                <Link to="/help">Help</Link>
                                <Link to="/faq">FQAs</Link>
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

export default Contact;