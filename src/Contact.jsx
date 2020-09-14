import React from 'react';
import SmallBanner from './SmallBanner';
import mapIcon from './assets/icons/map.png';
import phoneIcon from './assets/icons/phone.png';
import emailIcon from './assets/icons/email.png';

import contactData from './data.json';

function contact() {
    return (
        <div>
          <SmallBanner />
          <section className="contact-us">
          <div className="container p-5">
            <div className="row text-white text-center">
              <div className="col-md-6 offset-md-3 col-sm-12">
                <h1> CONTACT US </h1>
                <div className="contact-box mb-4">
                <h5> <img src={mapIcon} /> Address </h5>
                {contactData.map(post => {
                  return(
                    <p className="text-white text-center"> {post.address} </p>
                  )
                })} 

                </div>
                <div className="contact-box mb-4">
                  <h5><img src={phoneIcon} /> Phone Number </h5>
                  {contactData.map(post => {
                  return(
                    <p className="text-white text-center"> {post.phone} </p>
                  )
                })}
                </div>
                <div className="contact-box">
                  <h5><img src={emailIcon} /> Email ID  </h5>
                  {contactData.map(post => {
                  return(
                    <p className="text-white text-center"> {post.email} </p>
                  )
                })}
                </div>
              </div>
            </div>  
          </div> 
          </section>
        </div>
    )
}

export default contact
