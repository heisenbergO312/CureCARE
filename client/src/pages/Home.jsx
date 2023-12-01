import React from "react";

import { Link } from "react-router-dom";
import {
  BLOG_DESC,
  BLOG_HEAD,
  DOCTORS,
  HOME_DESC,
  HOME_HEAD,
  SATISFACTION,
  SERVICE_DESC,
  SERVICE_HEAD,
  YEARS,
} from "../assets/utils";
import homeIMG from "../assets/images/about.webp";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <h1>{HOME_HEAD}</h1>
          <p>{HOME_DESC}</p>
          <Link className="home-btn" to={"/doctors"}>
            {" "}
            Find a Doctor
          </Link>
          <div className="stats">
            <div className="stat">
              <h2>{YEARS}</h2>
              <p>Years </p>
            </div>
            <div className="stat">
              <h2>{DOCTORS}</h2>
              <p>Doctors</p>
            </div>
            <div className="stat">
              <h2>{SATISFACTION}</h2>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img className="home-img" src={homeIMG} alt="" />
        </div>
      </div>
      <div className="home-container">
        <div className="home-left">
          <img
            src="https://cdn.smallseotools.com/blog-images-s3/1_blog1.jpg"
            alt=""
          />
        </div>
        <div className="home-right">
          <h1>{BLOG_HEAD}</h1>
          <p>{BLOG_DESC}</p>
          <Link className="home-btn" to={"/blog"}>
            {" "}
            Blogs
          </Link>
        </div>
      </div>
      <div className="home-container">
        <div className="home-left">
          <h1>{SERVICE_HEAD}</h1>
          <p>{SERVICE_DESC}</p>
          <Link className="home-btn" to={"/services"}>
            {" "}
            Services
          </Link>
        </div>
        <div className="home-right">
          <img src="https://m.economictimes.com/thumb/msid-73270733,width-1200,height-900,resizemode-4,imgsize-681895/mental-health-image_istock.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
