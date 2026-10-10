import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
export default function Footer() {
    let [settingData, setSettingData] = useState({
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

    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                let items = {}
                Object.keys(settingData).map((key) => items[key] = SettingStateData[0][key] || settingData[key])
                setSettingData(items)
            }
        })()
    }, [SettingStateData.length])
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                {settingData.siteName}</h4>
                            <p className="mb-4">Best Online Shopping Plateform</p>
                            <a className="mb-2 d-block" href={settingData.map1} target='_blank'>
                                <i className="bi bi-geo-alt text-primary me-3"></i>
                                {settingData.address}
                            </a>
                            <a className="mb-2 d-block" href={`mailto:${settingData.email}`} target='_blank'>
                                <i className="bi bi-envelope text-primary me-3"></i>
                                {settingData.email}
                            </a>
                            <a className="mb-2 d-block" href={`tel:${settingData.phone}`} target='_blank'>
                                <i className="bi bi-telephone text-primary me-3"></i>
                                {settingData.phone}
                            </a>
                            <a className="mb-2 d-block" href={`https://wa.me/${settingData.whatsapp}`} target='_blank'>
                                <i className="bi bi-whatsapp text-primary me-3"></i>
                                {settingData.whatsapp}
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Quick Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="/"><i className="fa fa-angle-right me-2"></i>Home</Link>
                                <Link className="text-light mb-2" to="/about"><i className="fa fa-angle-right me-2"></i>About Us</Link>
                                <Link className="text-light mb-2" to="/shop"><i className="fa fa-angle-right me-2"></i>Shop</Link>
                                <Link className="text-light mb-2" to="/feature"><i className="fa fa-angle-right me-2"></i>Features</Link>
                                <Link className="text-light mb-2" to="/faq"><i className="fa fa-angle-right me-2"></i>Faq</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Popular Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="/testimonial"><i className="fa fa-angle-right me-2"></i>Testimonial</Link>
                                <Link className="text-light mb-2" to="/contactus"><i className="fa fa-angle-right me-2"></i>Contact Us</Link>
                                <Link className="text-light mb-2" to="#"><i className="fa fa-angle-right me-2"></i>Privacy policy</Link>
                                <Link className="text-light mb-2" to="#"><i className="fa fa-angle-right me-2"></i>Terms and Conditions</Link>
                                <Link className="text-light mb-2" to="#"><i className="fa fa-angle-right me-2"></i>Refund Policy</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Newsletter</h4>
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                            <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div className="d-flex">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href={settingData.twitter}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href={settingData.facebook}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href={settingData.linkedin}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href={settingData.youtube}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href={settingData.instagram}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <Link className="text-primary" to="/">{settingData.siteName}</Link>. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
