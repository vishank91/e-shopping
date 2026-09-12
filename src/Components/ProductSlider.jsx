import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const sliderOptions = {
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
    modules: [],
    className: "mySwiper"
}
export default function ProductSlider() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                        <h1 className="display-4">Qualified Healthcare Professionals</h1>
                    </div>
                    <div className="position-relative">
                        <Swiper {...sliderOptions}>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="row g-0 bg-light rounded overflow-hidden">
                                        <div className="col-12 col-sm-5 h-100">
                                            <img className="img-fluid h-100" src="img/team-1.jpg" style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                            <div className="mt-auto p-4">
                                                <h3>Doctor Name</h3>
                                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum
                                                    dolor</p>
                                            </div>
                                            <div className="d-flex mt-auto border-top p-4">
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#!"><i
                                                    className="fab fa-twitter"></i></a>
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#!"><i
                                                    className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#!"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="row g-0 bg-light rounded overflow-hidden">
                                        <div className="col-12 col-sm-5 h-100">
                                            <img className="img-fluid h-100" src="img/team-2.jpg" style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                            <div className="mt-auto p-4">
                                                <h3>Doctor Name</h3>
                                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum
                                                    dolor</p>
                                            </div>
                                            <div className="d-flex mt-auto border-top p-4">
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#!"><i
                                                    className="fab fa-twitter"></i></a>
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#!"><i
                                                    className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#!"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="row g-0 bg-light rounded overflow-hidden">
                                        <div className="col-12 col-sm-5 h-100">
                                            <img className="img-fluid h-100" src="img/team-3.jpg" style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                            <div className="mt-auto p-4">
                                                <h3>Doctor Name</h3>
                                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum
                                                    dolor</p>
                                            </div>
                                            <div className="d-flex mt-auto border-top p-4">
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#!"><i
                                                    className="fab fa-twitter"></i></a>
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#!"><i
                                                    className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#!"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
