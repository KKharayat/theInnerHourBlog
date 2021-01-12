import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import Blog from "./components/Blog";
import Footer from "./components/Footer.js";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const blogsPerPage = 10;

  let currentBlogs = [];

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.theinnerhour.com/v1/bloglisting`
        );
        setBlogs(res.data.list);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    getBlogs();
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let pagination = (
    <div className="row justify-content-center my-3">
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogs.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );

  // Searching blogs by title
  if (search !== "") {
    let title = new RegExp(search, "ig");
    currentBlogs = blogs.filter((blog) => {
      return title.test(blog.title);
    });
    pagination = "";
  }

  if (error) {
    return (
      <div className="container">
        <h1>Sorry You are not connected to internet!!!</h1>
        <h1>{error.msg}</h1>
      </div>
    );
  }

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <SearchBox updateSearch={updateSearch} search={search} />
          <div className="container">
            <Blogs blogs={currentBlogs} loading={loading} />
            {pagination}
          </div>
        </Route>
        <Route exact path="/:id" render={() => <Blog blogs={blogs} />} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
