import React from 'react';
import Typewriter from 'typewriter-effect';
import './Banner.css'
import moneyBack from '../../assets/images/banner/promise1.png'

import safePurchase from '../../assets/images/promise section/secure-pay.png'
import warranty from '../../assets/images/promise section/1year-warranty.png'
import everydayService from '../../assets/images/promise section/24hour-service.png'
import slide1 from '../../assets/Slider/1-2021-Audi-A4.jpg'
import slide2 from '../../assets/Slider/2-BMW.jpg'

import slide3 from '../../assets/Slider/3-tesla-model-y.jpeg'



const Banner = () => {
    return (
        <div >
            <div className=" hero-section col col-md-12 col-sm-12">

                <div className='hero-type container mt-3 col col-md-12 col-sm-12' 
                >
                    <h1 className=' text-white  '>Are You Looking For <span className='text-danger'> Car</span>? We Provide <span className='text-danger'>{
                    
                    <Typewriter
  options={{
    strings: ['Audi A8','Mercedes Cars','BMW Cars','Tesla Cars','Best Cars','Quality Parts','Branded Cars'],
    autoStart: true,
    loop: true,
    
  }}
/>
                    }</span></h1>
                    <button className='btn btn-danger mt-5 px-3 py-2'>Get A Quote</button>
</div>


            </div>
            {/* what we promise */}
            <div className='mt-4  row  mx-5 justify-content-center '>
                <div className="container promise-section">
  <div className="row g-0 ">
    <div className="col ">
                            <div className="card bg-dark bg-opacity-10" >
                                <div className=''>

                                     <div>
                                    
  <img style={{width:"60px"}}  src={moneyBack} className="card-img-top mt-3" alt="..."/></div>
  <div className="card-body">
    <h5 className="card-title mt-2">Money Back Guarantee</h5>
    <small className="card-text">We give their money back.based on satisfaction</small>
  </div>

                                </div>
                               
</div>
    </div>
    <div className="col">
      <div className="card bg-dark bg-opacity-10" >
  
                    
                                
                                <div className=''>   <div><img style={{width:"70px"}} src={safePurchase} className="card-img-top m-2" alt="..." /></div><div className="card-body">
                                    <h5 className="card-title">Purchase Safely with us.</h5>
                                    <small className="card-text">We Guarantee safe transaction. 100% safe.</small>
  
  </div></div>
  
</div> 
                        </div>
                      
    <div className="col">
     <div className="card bg-dark bg-opacity-10" >
  <div className=''><div><img  style={{width:"115px"}} src={warranty} className="card-img-top m-1" alt="..."/></div><div className="card-body">
    <h5 className="card-title">1year warranty</h5>
     <small className="card-text">We Guarantee safe transaction. 100% safe.</small>
  </div></div>
  
</div>
           
 </div>
    <div className="col">
     <div className="card bg-dark bg-opacity-10" >
  <div className=''><div><img style={{width:"70px"}}  src={everydayService} className=" mt-2  card-img-top" alt="..."/></div><div className="card-body">
    <h5 className="card-title mt-2">Services Available 24hrs</h5> <small className="card-text">We Guarantee safe transaction. 100% safe.</small>
    
  </div></div>
  
</div>
           
 </div>
    </div>
  </div>
            </div>




            {/* showing good quality */}

             {/* first showup */}
            <div className='container d-flex justify-content-center mt-5'>
                <div><img width="450px" className='img-fluid' src={slide3} alt="" /></div>
                <div ><h3 style={{marginTop:"150px"}} className='mx-5 mt-5 '>We Provide Quality Product See  <br />Our New Collection from Tesla</h3><small>check this car out , click here</small><br />
                <button className='btn btn-danger'>See More</button></div>
                



            </div>

            {/* second showup */}
            <div className='container d-flex justify-content-center mt-5'>
                <div ><h3 style={{marginTop:"150px"}} className='mx-5 mt-5 '>We Provide Quality Product See  <br />Our New Collection from Audi A8</h3><small>check this car out , click here</small><br />
                <button className='btn btn-danger'>See More</button></div>
                <div><img width="450px" className='img-fluid' src={slide1} alt="" /></div>



            </div>
            {/* second showup */}
            <div className='container d-flex justify-content-center mt-5'>
                <div><img width="450px" className='img-fluid' src={slide2} alt="" /></div>
                <div ><h3 style={{marginTop:"150px"}} className='mx-5 mt-5 '>We Provide Quality Product See  <br />Our New Collection from BMW</h3><small>check this car out , click here</small><br />
                <button className='btn btn-danger'>See More</button></div>
                



            </div>
            {/* offer section */}
            <div className='bg-success p-4 mt-5 d-flex  justify-content-center '> <div><h2 className='text-white row row-md-6 row-sm-12'>50 Years of Glory! Get Up to 50% Discount!!! </h2><button className='btn btn-warning text-white px-3'>Buy Now!</button></div> 
            </div>
               
        </div>

        
    );
};

export default Banner;