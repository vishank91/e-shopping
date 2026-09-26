import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navabr from './Components/Navabr'
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import ContactUsPage from './Pages/ContactUsPage'
import ErrorPage from './Pages/ErrorPage'
import TestimonialPage from './Pages/TestimonialPage'

import AdminHomePage from './Pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './Pages/Admin/Maincategory/AdminMaincategoryPage'
import AdminMaincategoryCreatePage from './Pages/Admin/Maincategory/AdminMaincategoryCreatePage'
import AdminMaincategoryUpdatePage from './Pages/Admin/Maincategory/AdminMaincategoryUpdatePage'

import AdminSubcategoryPage from './Pages/Admin/Subcategory/AdminSubcategoryPage'
import AdminSubcategoryCreatePage from './Pages/Admin/Subcategory/AdminSubcategoryCreatePage'
import AdminSubcategoryUpdatePage from './Pages/Admin/Subcategory/AdminSubcategoryUpdatePage'

import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminBrandCreatePage from './Pages/Admin/Brand/AdminBrandCreatePage'
import AdminBrandUpdatePage from './Pages/Admin/Brand/AdminBrandUpdatePage'

import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminFeatureCreatePage from './Pages/Admin/Feature/AdminFeatureCreatePage'
import AdminFeatureUpdatePage from './Pages/Admin/Feature/AdminFeatureUpdatePage'
export default function App() {
  return (
    <BrowserRouter>
      <Navabr />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/*' element={<ErrorPage />} />


        {/* Admin Routes */}
        <Route path='/admin' element={<AdminHomePage />} />

        <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
        <Route path='/admin/maincategory/create' element={<AdminMaincategoryCreatePage />} />
        <Route path='/admin/maincategory/update/:id' element={<AdminMaincategoryUpdatePage />} />

        <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
        <Route path='/admin/subcategory/create' element={<AdminSubcategoryCreatePage />} />
        <Route path='/admin/subcategory/update/:id' element={<AdminSubcategoryUpdatePage />} />

        <Route path='/admin/brand' element={<AdminBrandPage />} />
        <Route path='/admin/brand/create' element={<AdminBrandCreatePage />} />
        <Route path='/admin/brand/update/:id' element={<AdminBrandUpdatePage />} />

        <Route path='/admin/feature' element={<AdminFeaturePage />} />
        <Route path='/admin/feature/create' element={<AdminFeatureCreatePage />} />
        <Route path='/admin/feature/update/:id' element={<AdminFeatureUpdatePage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
