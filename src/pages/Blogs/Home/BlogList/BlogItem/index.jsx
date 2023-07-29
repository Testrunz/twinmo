import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";
import {IoIosArrowDroprightCircle} from "react-icons/io"

const BlogItem = ({
  blog: {
    description,
    title,
    cover,
    category,
    id,
  },
}) => {
  const navigate = useNavigate();
  const onClickBlog = () => {
    navigate(`/blog/${id}`)
    window.scrollTo(0, 0);
  };

  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={cover} alt="cover" />
      {/* <Chip label={category} /> */}
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <h3>{title}</h3>
        </Link>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <Link className="blogItem-link" to={`/blog/${id}`} onClick={onClickBlog}>
         <IoIosArrowDroprightCircle className="arrow-icon"/>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
