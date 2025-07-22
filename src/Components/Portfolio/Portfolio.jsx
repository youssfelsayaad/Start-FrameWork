import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import LineDark from "../LineDark/LineDark";

export default function Portfolio() {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center  p-5 ">
      <h1 className="text-center  p-3  text-Dblue fw-bolder">
        Portfolio Component
      </h1>
      <LineDark />

      <div className="row pt-4">
        <div className="container row pb-5">
          <div className="col-md-4">
            <div
              class="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-body">
                  <img src={img1} alt="" className="img-fluid" />{" "}
                </div>
              </div>
            </div>

            <a
              class="btn"
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
            >
              <img src={img1} alt="" className="img-fluid" />
              <div className="inner justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass fs-1 text-light"></i>
              </div>
            </a>
          </div>
          {/*  */}
          <div className="col-md-4">
            <div
              class="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-body">
                  <img src={img2} alt="" className="img-fluid" />{" "}
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <a
              class="btn"
              data-bs-toggle="modal"
              href="#exampleModalToggle2"
              role="button"
            >
              <img src={img2} alt="" className="img-fluid" />
              <div className="inner justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass fs-1 text-light"></i>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <div
              class="modal fade"
              id="exampleModalToggle3"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-body">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <a
              class="btn"
              data-bs-toggle="modal"
              href="#exampleModalToggle3"
              role="button"
            >
              <img src={img3} alt="" className="img-fluid" />
              <div className="inner justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass fs-1 text-light"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container row pb-5">
          <div className="col-md-4">
            <div
              class="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-body">
                  <img src={img1} alt="" className="img-fluid" />{" "}
                </div>
              </div>
            </div>
            <a
              class="btn"
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
            >
              <img src={img1} alt="" className="img-fluid" />
              <div className="inner justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass fs-1 text-light"></i>
              </div>
            </a>
          </div>
          {/*  */}
          <div className="col-md-4">
            <div
              class="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-body">
                  <img src={img2} alt="" className="img-fluid" />{" "}
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <a
              class="btn"
              data-bs-toggle="modal"
              href="#exampleModalToggle2"
              role="button"
            >
              <img src={img2} alt="" className="img-fluid" />
              <div className="inner justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass fs-1 text-light"></i>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <div
              class="modal fade"
              id="exampleModalToggle3"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-body">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <a
              class="btn"
              data-bs-toggle="modal"
              href="#exampleModalToggle3"
              role="button"
            >
              <img src={img3} alt="" className="img-fluid" />
              <div className="inner justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass fs-1 text-light"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
