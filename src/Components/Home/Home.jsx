import React from "react";
import HomeImage from "../../assets/Home.Svg";
import Line from "../Line/Line";

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100  bg-ment">
<picture className="w-75 text-center">      <img src={HomeImage} className="w-25 " alt="AVATAR" />
</picture>
      <h1 className="text-center  p-2 text-light fw-bolder"> start Framework </h1>
  <Line/>

      <div className="row">
<p className="text-light p-2 ">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}

