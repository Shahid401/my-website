import React from 'react'
import SmallBanner from './SmallBanner'
import serviceData from './data.json'

function Services() {
    return (
        <div>
            <SmallBanner />
           <section className="services pt-5 pb-5">
               <div className="container">
                   <div className="row text-center">
                   <div className="col-md-8 offset-md-2">
                   <h1 className="pb-3 text-white">SERVICES</h1>
                    {serviceData.map(post => {
                        return(
                            <p className="text-white"> {post.service} </p>
                        )
                    })} 
                   </div>
                   </div>
               </div>
           </section>
        </div>
    )
}

export default Services
