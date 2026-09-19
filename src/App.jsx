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
import AdminMaincategoryPage from './Pages/Admin/Maincategory/AdminMaincategortPage'
import AdminMaincategoryCreatePage from './Pages/Admin/Maincategory/AdminMaincategortCreatePage'
import AdminMaincategoryUpdatePage from './Pages/Admin/Maincategory/AdminMaincategortUpdatePage'

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

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
