import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs, loading }) => {
  if (loading) {
    return (
      <div className="container">
        <div className="row text-center mx-auto">
          <div className="col my-auto">
            <div className="spinner-border">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        {blogs.map((blog) => {
          return (
            <div
              key={blog._id}
              className="col-xs-10 col-sm-10 col-md-4 col-lg-4 m-4 card shadow p-0"
            >
              <img
                className="card-img img-fluid"
                src={blog.thumb}
                alt={blog.title}
              />
              <div className="card-body">
                <div className="card-title font-weight-bold">{blog.title}</div>
                <p className="card-text">{blog.metadescription}</p>
                <Link to={`/${blog.slug}`}>Read more</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
