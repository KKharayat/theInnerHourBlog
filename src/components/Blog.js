import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Blog = ({ blogs }) => {
  let { id = "" } = useParams();
  let history = useHistory();
  if (blogs.length === 0) {
    history.push("/");
    return <></>;
  }
  const indexOfBlog = blogs.findIndex((blog) => blog.slug === id);
  const blog = blogs[indexOfBlog];
  return (
    <div className="container m-auto">
      <div className="row justify-content-center mt-3">
        <div></div>
        <h1 className="text-center p-2 mb-4">{blog.title}</h1>
        <img src={blog.cover} alt={blog.title} className="img-fluid mb-5" />
        <div className="p-3">
          <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
