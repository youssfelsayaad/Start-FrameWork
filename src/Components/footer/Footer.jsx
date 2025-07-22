import React from "react";

export default function Footer() {
  return (
    <>
    <footer className="py-3  bg-dark text-light text-center fw-bolder  Layout-color">
      <div className="container d-flex justify-content-center align-items-center p-3">
        <div className="col-md-4 ">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4  ">
          <h3>AROUND THE WEB</h3>
<div className="row links justify-content-center align-items-center pt-3 gap-2">
  <div className="border border-light border-1 rounded-circle justify-content-center align-items-center d-flex" ><i class="fa-brands  fa-facebook"></i></div>
  <div className="border border-light border-1 rounded-circle justify-content-center align-items-center d-flex" ><i class="fa-brands  fa-twitter"></i></div>
  <div className="border border-light border-1 rounded-circle justify-content-center align-items-center d-flex" ><i class="fa-brands  fa-instagram"></i></div>
  <div className="border border-light border-1 rounded-circle justify-content-center align-items-center d-flex" ><i class="fa-brands  fa-linkedin"></i></div>
  </div>       
   </div>
        <div className="col-md-4  ">
          <h3>ABOUT FREELANCER</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </footer>
  <p className="p-3 bg-dark text-light m-0 text-center shadow">Copyright © Your Website youssfElsayaad 2025</p>
  </>
  );
}
