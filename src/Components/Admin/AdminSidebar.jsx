import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-house-check fs-5 me-3'></i>
                    <span>Home</span>
                </Link>
                <Link to="/admin/maincategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-list fs-5 me-3'></i>
                    <span>Maincategory</span>
                </Link>
                <Link to="/admin/subcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-list-check fs-5 me-3'></i>
                    <span>Subcategory</span>
                </Link>
                <Link to="/admin/brand" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-tag fs-5 me-3'></i>
                    <span>Brand</span>
                </Link>
                <Link to="/admin/product" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-list-ul fs-5 me-3'></i>
                    <span>Product</span>
                </Link>
                <Link to="/admin/feature" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-star fs-5 me-3'></i>
                    <span>Feature</span>
                </Link>
                <Link to="/admin/faq" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-question-diamond fs-5 me-3'></i>
                    <span>Faq</span>
                </Link>
                <Link to="/admin/setting" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-gear fs-5 me-3'></i>
                    <span>Setting</span>
                </Link>
                <Link to="/admin/newsletter" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-envelope fs-5 me-3'></i>
                    <span>Newsletter</span>
                </Link>
                <Link to="/admin/contactus" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-telephone fs-5 me-3'></i>
                    <span>Contact Us</span>
                </Link>
                <Link to="/admin/checkout" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='bi bi-bag-check fs-5 me-3'></i>
                    <span>Checkout</span>
                </Link>
                <Link to="/admin/user" className="list-group-item list-group-item-action active" aria-current="true">
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span>User</span>
                </Link>
            </div>
        </>
    )
}
