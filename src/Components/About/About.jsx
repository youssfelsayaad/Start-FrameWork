import React from "react";
import Line from "../Line/Line";

export default function About() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100  bg-ment">
      <h1 className="text-center  p-3  text-light fw-bolder">
        About Framework
      </h1>
      <Line />
      <div className="row container text-start justify-content-center align-items-center p-3">
        <div className="col-md-5">
          <p className="text-light">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-5">
          <p className="text-light">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
