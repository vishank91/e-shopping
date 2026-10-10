import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


import Swal from 'sweetalert2'

import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css"

import AdminSidebar from '../../../Components/Admin/AdminSidebar'

import { deleteProduct, getProduct } from "../../../Redux/ActionCreators/ProductActionCreators"
export default function AdminProductPage() {
    let [data, setData] = useState([])

    let ProductStateData = useSelector(state => state.ProductStateData)
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

                dispatch(deleteProduct({ id: id }))
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
            dispatch(getProduct())
            if (ProductStateData.length)
                setData(ProductStateData)

            let time = setTimeout(() => {
                new DataTable('#myTable')
            }, 500)
            return time
        })()

        return () => clearTimeout(time)
    }, [ProductStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary p-2 text-center text-light'>Product
                            <Link to="/admin/product/create"><i className='bi bi-plus text-light float-end'></i></Link>
                        </h5>
                        <div className="table-responsive">
                            <table className='table table-bordered' id='myTable'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Maincategory</th>
                                        <th>Subcategory</th>
                                        <th>Brand</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Base Price</th>
                                        <th>Discount</th>
                                        <th>Final Price</th>
                                        <th>Stock</th>
                                        <th>Stock Quantity</th>
                                        <th>Pic</th>
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
                                            <td>{item.maincategory?.name ?? item.maincategory}</td>
                                            <td>{item.subcategory?.name ?? item.subcategory}</td>
                                            <td>{item.brand?.name ?? item.brand}</td>
                                            <td>
                                                <div style={{ width: 100 }}>
                                                    {item.color?.join(", ")}
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ width: 100 }}>
                                                    {item.size?.join(", ")}
                                                </div>
                                            </td>
                                            <td>&#8377;{item.basePrice}</td>
                                            <td>{item.discount}% Off</td>
                                            <td>&#8377;{item.finalPrice}</td>
                                            <td>{item.stock ? "In Stock" : "Out Of Stock"}</td>
                                            <td>{item.stockQuantity}</td>
                                            <td>
                                                <div style={{ width: 700 }}>
                                                    {item.pic?.map((item, index) => {
                                                        return <a key={index} href={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} target='_blank'>
                                                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} height={70} width={80} className='m-1' alt="Product" />
                                                        </a>
                                                    })}
                                                </div>
                                            </td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td>
                                                <Link className='btn btn-primary' to={`/admin/product/update/${item.id}`}>
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
