import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <div className="container-xxl bg-white p-0">

        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <p className="section-title text-secondary justify-content-center"><span></span>Testimonial<span></span></p>
                <h1 className="text-center mb-5">What Say Our Clients!</h1>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-light rounded my-4">
                        <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="/assets/img/testimonial-1.jpg" style={{width: "65px", height: "65px"}} alt="testimonial" />
                            <div className="ps-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded my-4">
                        <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="/assets/img/testimonial-2.jpg" style={{width: "65px", height: "65px"}} alt="testimonial" />
                            <div className="ps-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded my-4">
                        <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="/assets/img/testimonial-3.jpg" style={{width: "65px", height: "65px"}} alt="testimonial" />
                            <div className="ps-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Testimonial End */}

       

        {/* Back to Top */}
        <Link to="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  );
}

export default Testimonial;