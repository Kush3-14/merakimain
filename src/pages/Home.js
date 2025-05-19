import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        // Simulate loading time or wait for actual data
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 500); // Adjust this time as needed
    }

    render() {
        return (
            <div className="container-xxl bg-white p-0">
                {/* Spinner Start */}
                <div id="spinner" className={`${this.state.isLoading ? 'show' : ''} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}>
                    <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                {/* Spinner End */}


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
                                <Link to="/" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</Link>
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
                                <p className="text-white mb-0">Completed Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}

                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container py-5 px-lg-5">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
                            <h1 className="text-center mb-5">What Solutions We Provide</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item d-flex flex-column text-center rounded">
                                    <div className="service-icon flex-shrink-0">
                                        <i className="fa fa-search fa-2x"></i>
                                    </div>
                                    <h5 className="mb-3">SEO Optimization</h5>
                                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <Link className="btn btn-square" to="/"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Web Design</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to=""><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-facebook-f fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Social Media Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to=""><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mail-bulk fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Email Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to=""><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-thumbs-up fa-2x"></i>
                            </div>
                            <h5 className="mb-3">PPC Advertising</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to=""><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-android fa-2x"></i>
                            </div>
                            <h5 className="mb-3">App Development</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to=""><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}

                {/* Newsletter Start */}
                <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5 px-lg-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center">
                                <p className="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
                                <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                                <p className="text-white mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo</p>
                                <div className="position-relative w-100 mt-3">
                                    <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: '48px' }} />
                                    <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2">
                                        <i className="fa fa-paper-plane text-primary fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter End */}

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
                            {/* Portfolio items */}
                        </div>
                    </div>
                </div>
                {/* Projects End */}

                
            </div>
        );
    }
}

export default Home;
