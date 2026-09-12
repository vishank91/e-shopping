import React from 'react'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminMaincategoryPage() {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary p-2 text-center text-light'>Maincategory
                            <Link to="/admin/maincategory/create"><i className='bi bi-plus text-light float-end'></i></Link>
                        </h5>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
