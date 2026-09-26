import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


import Swal from 'sweetalert2'

import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css"

import AdminSidebar from '../../../Components/Admin/AdminSidebar'

import { deleteFeature, getFeature } from "../../../Redux/ActionCreators/FeatureActionCreators"
export default function AdminFeaturePage() {
    let [data, setData] = useState([])

    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch(deleteFeature({ id: id }))
                setData(data.filter(x => x.id !== id))

                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "This record has been deleted.",
                    icon: "success"
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel)
                /* Read more about handling dismissals below */
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your data is safe :)",
                    icon: "error"
                });
        });
    }

    useEffect(() => {
        let time = (() => {
            dispatch(getFeature())
            if (FeatureStateData.length)
                setData(FeatureStateData)

            let time = setTimeout(() => {
                new DataTable('#myTable')
            }, 500)
            return time
        })()

        return () => clearTimeout(time)
    }, [FeatureStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary p-2 text-center text-light'>Feature
                            <Link to="/admin/feature/create"><i className='bi bi-plus text-light float-end'></i></Link>
                        </h5>
                        <div className="table-responsive">
                            <table className='table table-bordered' id='myTable'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Icon</th>
                                        <th>Short Description</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <span className='fs-1 text-primary' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                            </td>
                                            <td>{item.shortDescription}</td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td>
                                                <Link className='btn btn-primary' to={`/admin/feature/update/${item.id}`}>
                                                    <i className='bi bi-pencil-square'></i>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => deleteRecord(item.id)}>
                                                    <i className='bi bi-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
