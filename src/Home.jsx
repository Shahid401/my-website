import React from 'react';
import Banner from './assets/banner.jpg';
import Data from './data.json';

import { Link } from 'react-router-dom';

import HomeAboutImg from './assets/leds/home-about.jpeg';
import ledBulb from './assets/leds/led.jpg';
import rechargeableBulb from './assets/leds/rechargeable.jpg';
import colorfulBulb from './assets/leds/colorful.png';


function Home() {
    return (
        <div className="home">
            <div className="banner">
                <img src={Banner} />
            </div>
            <div className="container pb-5 pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title"> About
                            {Data.map(post => {
                                return(
                                    <span className="sub-title">
                                        {post.title}
                                    </span>
                                )
                            })}    
                        </h1>

                        {Data.map(post => {
                                return(
                                    <p>
                                        {post.homeAbout}
                                    </p>
                                )
                            })}

                        {Data.map(post => {
                                return(
                                    <Link className="default-btn" to="/about"> {post.readMore}</Link>
                                )
                            })}     
                        
                        
                        <br />
                        <br />
                    </div>
                    <div className="col-md-6 HomeAbout">
                        <img src={HomeAboutImg} className="img-fluid" />
                    </div>
                </div>
            </div>

           <section className="products">
           <div className="container">
               <h1 className="text-center text-white pb-3">OUR PRODUCTS</h1>
                <div className="row text-center ">
                    <div className="col-md-6 p-3">
                        <img src={ledBulb} className="img-fluid" alt="Led Lights" /> 
                        {Data.map(post => {
                            return(
                                <h2 className="title text-dark text-uppercase text-white">
                                    {post.product1}
                                </h2>
                            )
                        })} 

                        {Data.map(post => {
                            return(
                                <Link className="products-btn btn1" to="/products"> {post.viewMore} </Link>
                            )
                        })}

                        {Data.map(post => {
                            return(
                                <span className="buyNow">
                                    <a href="tel:+918521169373"> {post.buyNow} </a>
                                </span>
                            )
                        })}                   
                       
                    </div>
                    <div className="col-md-6 p-3">
                        <img src={rechargeableBulb} className="img-fluid" alt="Chargeable Led Lights " />
                        {Data.map(post => {
                            return(
                                <h2 className="title text-dark text-uppercase text-white">
                                    {post.product2}
                                </h2>
                            )
                        })}

                        {Data.map(post => {
                            return(
                            <Link className="products-btn btn1" to="/products"> {post.viewMore} </Link>
                            )
                        })} 

                        {Data.map(post => {
                            return(
                                <span className="buyNow">
                                    <a href="tel:+918521169373"> {post.buyNow} </a>
                                </span>  
                            )
                        })}  
                      
                        
                                               
                    </div>
                    <div className="col-md-12 p-3">
                        <img src={colorfulBulb} className="img-fluid" alt="Chargeable Led Lights " />
                        {Data.map(post => {
                            return(
                                <h2 className="title text-dark text-uppercase text-white">
                                    {post.product3}
                                </h2>
                            )
                        })}

                        {Data.map(post => {
                            return(
                                <Link className="products-btn" to="/products"> {post.viewMore} </Link>
                            )
                        })} 

                        {Data.map(post => {
                            return(
                                <span className="buyNow">
                                    <a href="tel:+918521169373"> {post.buyNow} </a>
                                </span> 
                            )
                        })}  
                                                                                              
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default Home
