import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'    
import Shop from './Shop'
import SingleProduct from './SingleProduct'

import AdminHome from './Admin/AdminHome'
import Maincategory from './Admin/Maincategory'
import AddMaincategory from './Admin/AddMaincategory'
import UpdateMaincategory from './Admin/UpdateMaincategory'
import Subcategory from './Admin/Subcategory'
import AddSubcategory from './Admin/AddSubcategory'
import UpdateSubcategory from './Admin/UpdateSubcategory'
import Brand from './Admin/Brand'
import AddBrand from './Admin/AddBrand'
import UpdateBrand from './Admin/UpdateBrand'
import Product from './Admin/Product'
import AddProduct from './Admin/AddProduct'
import UpdateProduct from './Admin/UpdateProduct'
export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/single-product-page/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/contact' element={<Contact />} />


                <Route path='/admin' element={<AdminHome />} />
                <Route path='/admin-maincategories' element={<Maincategory />} />
                <Route path='/admin-add-maincategory' element={<AddMaincategory />} />
                <Route path='/admin-update-maincategory/:id' element={<UpdateMaincategory />} />
                <Route path='/admin-subcategories' element={<Subcategory />} />
                <Route path='/admin-add-subcategory' element={<AddSubcategory />} />
                <Route path='/admin-update-subcategory/:id' element={<UpdateSubcategory />} />
                <Route path='/admin-brands' element={<Brand />} />
                <Route path='/admin-add-brand' element={<AddBrand />} />
                <Route path='/admin-update-brand/:id' element={<UpdateBrand />} />
                <Route path='/admin-products' element={<Product />} />
                <Route path='/admin-add-product' element={<AddProduct />} />
                <Route path='/admin-update-product/:id' element={<UpdateProduct />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
