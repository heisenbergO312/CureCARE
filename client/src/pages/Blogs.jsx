import React from "react";
import { Row } from "react-bootstrap";
import { blogs } from "../assets/data/blogs";
import BlogCard from "../components/BlogCard/BlogCard";
const Blogs = () => {
  return (
    <div className="home-container">
      <Row>
      <div className="section-heading mb-5">ALL BLOGS</div>
        {blogs.map((item, index) => {
          return <BlogCard item={item} index={index} />;
        })}
      </Row>
    </div>
  );
};

export default Blogs;
