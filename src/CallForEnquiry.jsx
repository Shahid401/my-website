import React from 'react'
import Data from './data.json';

function CallForEnquiry() {
    return (
        <div className="callNow">
            <div className="container">
                <div className="row text-center text-white">
                   <div className="col-md-8 offset-md-2">
                   {Data.map(post => {
                        return(
                            <h3 className="pb-1">
                                {post.callNow}
                            </h3>
                        )
                    })} 
                    <a className="text-white" href="tel:+918521169373">+91-8521169373</a>
                        <a href="https://api.whatsapp.com/send?phone=918521169373" >
                            <i class="fab fa-whatsapp fa-2x"></i>
                        </a>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default CallForEnquiry
