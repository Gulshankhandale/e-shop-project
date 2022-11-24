import React from 'react'
import Service1 from '../assets/Services/service1.png';
import Service2 from '../assets/Services/service2.png';
import Service3 from '../assets/Services/service3.png';
import Service4 from '../assets/Services/service4.png';

function ServiceSection() {
  return <>
  <div className='service-area' style={{marginTop:"50px", marginBottom:"50px"}}>
    <div className='container'>
        <div className='row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20'>
        <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={Service1} alt="Service" style={{height:"40px", width:"45px", marginRight:"9px"}}/>
                        </div>
                        <div className="content">
                            <h6 className="title">Fast &amp; Secure Delivery</h6>
                            <p style={{color:"#777777"}}>Tell about your service.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={Service2} alt="Service" style={{height:"40px", width:"45px", marginRight:"9px"}}/>
                        </div>
                        <div className="content">
                            <h6 className="title">Money Back Guarantee</h6>
                            <p style={{color:"#777777"}}>Within 10 Days</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={Service3} alt="Service" style={{height:"40px", width:"45px", marginRight:"9px"}}/>
                        </div>
                        <div className="content">
                            <h6 className="title">24 Hour Return Policy</h6>
                            <p style={{color:"#777777"}}>No question ask.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={Service4} alt="Service" style={{height:"40px", width:"45px", marginRight:"9px"}}/>
                        </div>
                        <div className="content">
                            <h6 className="title">Pro Quality Support</h6>
                            <p style={{color:"#777777"}}>24/7 Live support.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>

  </div>
  </>
}

export default ServiceSection