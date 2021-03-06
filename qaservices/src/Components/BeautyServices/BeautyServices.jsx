import "./BeautyServices.css";
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import Footer from '../Footer/index'






function template() {
  return (
    <div className="beauty-services">
    <NavbarAfterLogin />
      
      {
        this.beautyServiceData.map((data,index)=>{
          return  <>
                <div class="container">
         <div class="card m-0 p-0  mt-3" >
             <div class="row">
                 <div class="col-md-4">
                     <img src={data.img} height="300" width="300" alt="ss" />
                 </div>
                 <div class="col-md-8  ">
        <h3 class="card-title mt-3">{data.title}</h3>
        <p>{data.description}</p>
                     <button class="btn font-weight-bold btn-primary">Avail service</button>
                    </div>
             </div>
         </div>
         
     </div>

          </>
        })
      }
     <Footer  />
    </div>
  );
};

export default template;
