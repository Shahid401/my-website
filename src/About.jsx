import React from 'react'
import aboutData from './data.json'
import SmallBanner from './SmallBanner'
import HomeAbout from './assets/leds/home-about.jpeg'

function About() {
    return (
        <div>
           <SmallBanner />
            <div className="container about">
                <div className="row">
                <h1 className="title text-center">About <span className="sub-title"> Smart LED</span></h1>
                    <div className="col-md-6 pt-5">
                        {aboutData.map((aboutDetail, index) => {
                            return <div>
                            <p> {aboutDetail.aboutUs} </p>
                            </div>
                        })}
                    </div>
                    <div className="col-md-6">
                        <img src={HomeAbout} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
