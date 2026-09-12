import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navabr() {
    let [setttingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        map1: import.meta.env.VITE_APP_MAP1,
        address: import.meta.env.VITE_APP_ADDRESS,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE
    })
    return (
        <>
            <div className="container-fluid py-2 border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-decoration-none text-body pe-3" href={setttingData.map1} target='_blank'>
                                    <i className="bi bi-geo-alt me-1"></i>
                                    <span className='d-none d-lg-inline-block'>{setttingData.address}</span>
                                </a>
                                <a className="text-decoration-none text-body pe-3" href={`mailto:${setttingData.email}`} target='_blank'>
                                    <i className="bi bi-envelope me-1"></i>
                                    <span className='d-none d-lg-inline-block'>{setttingData.email}</span>
                                </a>
                                <a className="text-decoration-none text-body pe-3" href={`tel:${setttingData.phone}`} target='_blank'>
                                    <i className="bi bi-telephone me-1"></i>
                                    <span className='d-none d-lg-inline-block'>{setttingData.phone}</span>
                                </a>
                                <a className="text-decoration-none text-body pe-3" href={`https://wa.me/${setttingData.whatsapp}`} target='_blank'>
                                    <i className="bi bi-whatsapp me-1"></i>
                                    <span className='d-none d-lg-inline-block'>{setttingData.whatsapp}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-body px-2" href={setttingData.facebook}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-body px-2" href={setttingData.twitter}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-body px-2" href={setttingData.linkedin}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-body px-2" href={setttingData.instagram}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-body ps-2" href={setttingData.youtube}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid sticky-top bg-white shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                        <Link to="/" className="navbar-brand">
                            <h1 className="m-0 text-uppercase text-primary"><i className="bi bi-cart-check plus me-2"></i>{setttingData.siteName}</h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                                <NavLink to="/feature" className="nav-item nav-link">Feature</NavLink>
                                <NavLink to="/faq" className="nav-item nav-link">Faq</NavLink>
                                <NavLink to="/testimonial" className="nav-item nav-link">Testimonial</NavLink>
                                <NavLink to="/contactUs" className="nav-item nav-link">ContactUs</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nitin Chauhan</a>
                                    <div className="dropdown-menu m-0">
                                        <Link to="/profile?option=Profile" className="dropdown-item">Profile</Link>
                                        <Link to="/admin" className="dropdown-item">Dashboard</Link>
                                        <Link to="/profile?option=Orders" className="dropdown-item">Orders</Link>
                                        <Link to="/profile?option=Wishlist" className="dropdown-item">Wishlist</Link>
                                        <Link to="/profile?option=Address" className="dropdown-item">Address</Link>
                                        <Link to="/cart" className="dropdown-item">Cart</Link>
                                        <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                        <button className="dropdown-item">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
