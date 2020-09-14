import React from 'react';
import SmallBanner from './SmallBanner'
import ledBulb from './assets/leds/led.jpg';
import rechargeableBulb from './assets/leds/rechargeable.jpg';
import colorfulBulb from './assets/leds/colorful.png';

import Data from './data.json';

const products1 = ["9W - 12W", "White Light","Energy Saving"];
const products2 = ["9W - 12W", "White Light", "2 Hours Backup", "Energy Saving"];
const products3 = ["9W - 12W", "White Light","Energy Saving"];


function Products() {
    return (
        <div>
            <SmallBanner />
            <section className="products">
                <div className="container">
                    <h1 className="text-center text-white pb-3">OUR PRODUCTS</h1>
                        <div className="row text-center ">
                            <div className="col-md-6 p-3">
                                <img src={ledBulb} className="img-fluid" alt="Led Lights" /> 
                            
                            {Data.map(post => {
                                return(
                                    <h2 className="title text-dark text-uppercase text-white"> {post.product1} </h2>
                                )
                            })}

                            {Data.map(post => {
                                return(
                                    <span className="buyNowLed"><a href="tel:+918521169373"> {post.buyNow} </a></span>
                                )
                            })}      
                                
                            </div>
                            <div className="col-md-6 p-3">
                                <h6 className="led-title text-white">LED LIGHTS SPECIFIACATIONS</h6>
                                <ul class="list-group">
                                    {products1.map(function(item) {
                                    return <li class="list-group-item" key={item}>{item}</li>;
                                    })}
                                </ul>                                
                            </div>

                            <div className="col-md-6 p-3">
                                <img src={rechargeableBulb} className="img-fluid" alt="Chargeable Led Lights " />

                                {Data.map(post => {
                                return(
                                    <h2 className="title text-dark text-uppercase text-white"> {post.product2} </h2>
                                )
                            })}

                            {Data.map(post => {
                                return(
                                    <span className="buyNow"><a href="tel:+918521169373"> {post.buyNow} </a>
                                </span> 
                                )
                            })}
                           
                                                       
                            </div>
                            <div className="col-md-6 p-3">
                            <h6 className="chargeable-title text-white">CHARGEABLE LED LIGHTS SPECIFIACATIONS</h6>
                                <ul class="list-group">
                                    {products2.map(function(item) {
                                    return <li class="list-group-item" key={item}>{item}</li>;
                                    })}
                                </ul>  
                            </div>

                            <div className="col-md-6 p-3">
                                <img src={colorfulBulb} className="img-fluid" alt="Colorful Led Lights " />

                            {Data.map(post => {
                                return(
                                    <h2 className="title text-dark text-uppercase text-white"> {post.product3} </h2> 
                                )
                            })}

                            {Data.map(post => {
                                return(
                                    <span className="buyNowColorful"><a href="tel:918521169373"> {post.buyNow} </a>
                                </span> 
                                )
                            })}

                            </div>
                            <div className="col-md-6 p-3">
                            <h6 class="colorful-title text-white">COLORFUL LED LIGHTS SPECIFIACATIONS</h6>
                                <ul class="list-group">
                                    {products3.map(function(item) {
                                    return <li class="list-group-item" key={item}>{item}</li>;
                                    })}
                                </ul>  
                            </div>

                        </div>
                    </div>
           </section>
        </div>
    )
}

export default Products
