import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getProduct } from "../Store/ActionCreators/ProductActionCreators"


export default function Home() {
    var [products,setProducts] = useState([])
    var allproducts = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
        if (allproducts.length) {
            setProducts(allproducts.sort((x,y)=>y.id-x.id).slice(0,8))
        }
    }, [allproducts.length])
    return (
        <>
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item position-relative active" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src="/assets/img/carousel-1.jpg" style={{ objectFit: "cover" }} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src="/assets/img/carousel-2.jpg" style={{ objectFit: "cover" }} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src="/assets/img/carousel-3.jpg" style={{ objectFit: "cover" }} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src="/assets/img/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save Upto 90%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src="/assets/img/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save Upto 90%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title text-center position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">
                    {
                        products.map((item, index) => {
                            return <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src={`/assets/images/${item.pic1}`} style={{height:"250px"}} alt="" />
                                        <div className="product-action">
                                            <Link to={`/single-product-page/${item.id}`} className="btn btn-outline-dark btn-square w-100" href="">View</Link>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="h6 text-decoration-none text-truncate" href="">{item.name}</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>&#8377;{item.finalprice}</h5><h6 className="text-muted ml-2"><del>&#8377;{item.baseprice}</del> <sup>{item.discount}% Off</sup></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: "300px" }}>
                            <img className="img-fluid" src="/assets/img/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save Upto 90%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: "300px" }}>
                            <img className="img-fluid" src="/assets/img/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save Upto 90%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
