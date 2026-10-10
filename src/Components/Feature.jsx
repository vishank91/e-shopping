import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFeature } from "../Redux/ActionCreators/FeatureActionCreators"
export default function Feature() {
    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => dispatch(getFeature()))()
    }, [FeatureStateData.length])
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Features</h5>
                        <h1 className="display-4">Excellent Medical Features</h1>
                    </div>
                    <div className="row g-5">
                        {FeatureStateData.map((item, index) => {
                            return <div className="col-lg-4 col-md-6" key={index}>
                                <div
                                    className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <span className='fs-1 text-light' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </div>
                                    <h4 className="mb-3">{item.name}</h4>
                                    <p className="m-0">{item.shortDescription}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
