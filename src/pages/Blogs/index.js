import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "./config/data";
import Chip from "./common/Chip";
import EmptyList from "./common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
   {/*    <Link className="blog-goBack" to="/blog">
        <span>Back</span> 
        <span> &#8592;</span> 
      </Link>*/}
      {blog ? (
        <div className="blog-wrap">
          <header>
            <h1 className="blog-title">{blog.title}</h1>
            {/* <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div> */}
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.introduction}</p>
          <p className="blog-desc">{blog.description}</p>
          <p className="blog-desc">{blog.content}</p>
          <p className="blog-desc">{blog.features}</p>
        </div>
      ) : (
        <EmptyList />
      )}
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Blog;
