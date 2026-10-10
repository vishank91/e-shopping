import React from 'react'
import About from '../Components/About'
import Feature from '../Components/Feature'
import ProductSlider from '../Components/ProductSlider'
import Testimonial from '../Components/Testimonial'
import Products from '../Components/Products'
import Faq from '../Components/Faq'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5"
                                style={{ borderColor: "rgba(256, 256, 256, .3) !important" }}>Discover Your Style, Shop Your Favorites!</h5>
                            <h1 className="display-1 text-white mb-md-4">Great Products, Amazing Deals, Happy Shopping!</h1>
                            <div className="pt-2">
                                <Link to="/shop" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                                <Link to="/contactus" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <Feature />
            <ProductSlider />
            <Testimonial />
            <Products />
            <Faq />
        </>
    )
}
