import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
export default function About() {
    let [settingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
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
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="/images/banner5.jpg"
                                    style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mb-4">
                                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                                <h1 className="display-4">Your One-Stop Destination for Online Shopping</h1>
                            </div>
                            <p>Welcome to {settingData.siteName}, your trusted destination for a convenient and enjoyable online shopping experience. We bring together a wide range of quality products across multiple categories to help you find everything you need in one place. Our goal is to make shopping simple, affordable, and accessible with user-friendly browsing, secure payment options, reliable delivery, and customer-focused service. From discovering the latest trends to finding everyday essentials, we strive to offer products that suit your needs and lifestyle. At {settingData.siteName}, your satisfaction matters to us, and we continuously work to make every shopping experience better, easier, and more rewarding.</p>
                            <div className="row g-3 pt-3">
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="bi bi-check-circle fs-1 text-primary mb-3"></i>
                                        <h6 className="mb-0">100% Genuine<small className="d-block text-primary">Products</small></h6>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="bi bi-headset fs-1 text-primary mb-3"></i>
                                        <h6 className="mb-0">24/7 Customer<small className="d-block text-primary">Care Support</small></h6>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="bi bi-tag fs-1 text-primary mb-3"></i>
                                        <h6 className="mb-0">100+ Top<small className="d-block text-primary">Brands</small></h6>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="bi bi-people fs-1 text-primary mb-3"></i>
                                        <h6 className="mb-0">10000+ Happy<small className="d-block text-primary">Customers</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
