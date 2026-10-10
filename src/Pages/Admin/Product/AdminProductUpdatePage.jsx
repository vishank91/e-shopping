import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import RichTextEditor from '../../../rte/RichTextEditor';
import { createStructuredContent } from '../../../rte/richTextEditorBridge';

import AdminSidebar from '../../../Components/Admin/AdminSidebar'

import TextValidator from '../../../Validators/TextValidator'
import ImageValidator from '../../../Validators/ImageValidator'

import { getProduct, updateProduct } from "../../../Redux/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../../../Redux/ActionCreators/BrandActionCreators"

const colors = ["Black", "White", "Blue", "Red", "Orange", "Gray", "Green", "Pink", "Yellow", "Purple", "Magenta", "N/A"]
const sizes = ["XXXL", "XXL", "XL", "L", "M", "S", "XS", "NB", "26", "28", "30", "32", "34", "36", "38", "40", "42", "N/A"]
export default function AdminProductUpdatePage() {
    let { id } = useParams()
    let editorRef = useRef(null)
    let [description, setDescription] = useState("")

    let [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: [],
        size: [],
        basePrice: "",
        discount: "",
        finalPrice: "",
        stock: true,
        stockQuantity: "",
        pic: [],
        status: true
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "",
        color: "",
        size: "",
        basePrice: "",
        discount: "",
        stockQuantity: "",
        pic: ""
    })
    let [oldPics, setOldPics] = useState([])

    let [show, setShow] = useState(false)

    let ProductStateData = useSelector(state => state.ProductStateData)
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputCheckbox(key, value) {
        let arr = data[key]
        if (arr.includes(value))
            arr = arr.filter(x => x !== value)
        else
            arr.push(value)

        setData({ ...data, [key]: arr })
        setErrorMessage({ ...errorMessage, [key]: arr.length === 0 ? `Please Select Atleast One ${key}` : '' })
    }


    function getInputData(e) {
        let name = e.target.name
        let value = name === 'pic' ? Array.from(e.target.files).map(x => "product/" + x.name) : e.target.value
        // let value = name === 'pic' ? e.target.files : e.target.value

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidator(e) : TextValidator(e) })
    }

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x != "")
        if (error)
            setShow(true)
        else {
            let bp = parseInt(data.basePrice)
            let d = parseInt(data.discount)
            let fp = parseInt(bp - bp * d / 100)
            let sc = parseInt(data.stockQuantity)

            dispatch(updateProduct({
                ...data,
                maincategory: data.maincategory,
                subcategory: data.subcategory,
                brand: data.brand,
                basePrice: bp,
                discount: d,
                finalPrice: fp,
                stockQuantity: sc,
                description: description,
                pic: oldPics.concat(data.pic)
            }))

            // let formData = new FormData()
            // formData.append("id",data.id)
            // formData.append("name",data.name)
            // formData.append("maincategory",data.maincategory||MaincategoryStateData[0].id)
            // formData.append("subcategory",data.subcategory||SubcategoryStateData[0].id)
            // formData.append("brand",data.brand||BrandStateData[0].id)
            // formData.append("basePrice",bp)
            // formData.append("discount",d)
            // formData.append("finalPrice",fp)
            // formData.append("stock",data.stock)
            // formData.append("stockQuantity",sc)
            // formData.append("description",description)
            // formData.append("status",status)
            // data.color.forEach(x=>{
            //     formData.append("color",x)
            // })
            // data.size.forEach(x=>{
            //     formData.append("size",x)
            // })
            // data.pic.forEach(x=>{
            //     formData.append("pic",x)
            // })
            // data.pic.forEach(x=>{
            //     formData.append("oldPics",x)
            // })
            // dispatch(updateProduct(formData))

            navigate("/admin/product")
        }
    }

    function syncDocument(documentModel, nextHtml) {
        const resolvedHtml = nextHtml !== undefined ? nextHtml : renderHTML(documentModel);
        setDescription(resolvedHtml)
    }


    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductStateData.length) {
                let item = ProductStateData.find(x => x.id === id)
                if (item) {
                    setOldPics([...item.pic])
                    setData({ ...data, ...item, pic: [] })
                    setTimeout(() => {
                        syncDocument(createStructuredContent(""), item?.description ?? "");
                    }, 500)
                }
                else
                    navigate("/admin/product")
            }
        })()
    }, [ProductStateData.length])


    useEffect(() => {
        (() => dispatch(getMaincategory()))()
    }, [MaincategoryStateData.length])

    useEffect(() => {
        (() => dispatch(getSubcategory()))()
    }, [SubcategoryStateData.length])

    useEffect(() => {
        (() => dispatch(getBrand()))()
    }, [BrandStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary p-2 text-center text-light'>Update Product
                            <Link to="/admin/product"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">

                                <div className="col-12 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Product Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />

                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Maincategory*</label>
                                    <select name="maincategory" value={data.maincategory} onChange={getInputData} className='form-select border-primary'>
                                        {MaincategoryStateData.filter(x => x.status).map((item, index) => {
                                            return <option key={index}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Maincategory*</label>
                                    <select name="subcategory" value={data.subcategory} onChange={getInputData} className='form-select border-primary'>
                                        {SubcategoryStateData.filter(x => x.status).map((item, index) => {
                                            return <option key={index}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Brand*</label>
                                    <select name="brand" value={data.brand} onChange={getInputData} className='form-select border-primary'>
                                        {BrandStateData.filter(x => x.status).map((item, index) => {
                                            return <option key={index}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Stock*</label>
                                    <select name="stock" value={data.stock} onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">In Stock</option>
                                        <option value="0">Out Of Stock</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-3">
                                    <label>Base Price*</label>
                                    <input type="text" value={data.basePrice} name="basePrice" onChange={getInputData} placeholder='Product Base Price' className={`form-control ${show && errorMessage.basePrice ? 'border-danger' : 'border-primary'}`} />

                                    {show && errorMessage.basePrice ? <p className='text-danger text-capitalize'>{errorMessage.basePrice}</p> : null}
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-3">
                                    <label>Discount*</label>
                                    <input type="text" value={data.discount} name="discount" onChange={getInputData} placeholder='Product Discount' className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-primary'}`} />

                                    {show && errorMessage.discount ? <p className='text-danger text-capitalize'>{errorMessage.discount}</p> : null}
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-3">
                                    <label>Stock Quantity*</label>
                                    <input type="text" value={data.stockQuantity} name="stockQuantity" onChange={getInputData} placeholder='Product Stock Quantity' className={`form-control ${show && errorMessage.stockQuantity ? 'border-danger' : 'border-primary'}`} />

                                    {show && errorMessage.stockQuantity ? <p className='text-danger text-capitalize'>{errorMessage.stockQuantity}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Color*</label>
                                    <div className='row border border-1 border-primary p-2 m-1 rounded'>
                                        {colors.map((item, index) => {
                                            return <div key={index} className='col-lg-3 col-md-4 col-6'>
                                                <input
                                                    type="checkbox"
                                                    id={item}
                                                    onChange={() => getInputCheckbox('color', item)}
                                                    className='me-2'
                                                    checked={data.color?.includes(item)} />
                                                <label htmlFor={item}>{item}</label>
                                            </div>
                                        })}
                                    </div>
                                    {show && errorMessage.color ? <p className='text-danger text-capitalize'>{errorMessage.color}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Size*</label>
                                    <div className='row border border-1 border-primary p-2 m-1 rounded'>
                                        {sizes.map((item, index) => {
                                            return <div key={index} className='col-lg-3 col-md-4 col-6'>
                                                <input
                                                    type="checkbox"
                                                    id={item}
                                                    onChange={() => getInputCheckbox('size', item)}
                                                    className='me-2'
                                                    checked={data.size?.includes(item)} />
                                                <label htmlFor={item}>{item}</label>
                                            </div>
                                        })}
                                    </div>
                                    {show && errorMessage.size ? <p className='text-danger text-capitalize'>{errorMessage.size}</p> : null}
                                </div>

                                <div className='col-12 mb-3'>
                                    <label>Description</label>
                                    <RichTextEditor
                                        ref={editorRef}
                                        className="editor-host border border-primary"
                                        value={description}
                                        onChange={(nextHtml, editor) => syncDocument(editor.getJSON(), nextHtml)}
                                        style={{ minHeight: 380 }}
                                    />
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label>Pic</label>
                                    <input type="file" name="pic" multiple onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />

                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Old Pics(Click on Pic To Remove)</label>
                                    <div className='mt-2'>
                                        {oldPics.map((item, index) => {
                                            return <img
                                                onClick={() => {
                                                    oldPics.splice(index, 1)
                                                    setOldPics([...oldPics])
                                                }}
                                                src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`}
                                                key={index}
                                                height={70}
                                                width={70}
                                                className='m-2' />
                                        })}
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Status</label>
                                    <select name="status" value={data.status ? "1" : "0"} onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <button className='btn btn-primary w-100'>Update</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
