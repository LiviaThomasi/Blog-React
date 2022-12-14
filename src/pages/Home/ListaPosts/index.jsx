import React from "react";
import Posts from "./Posts";
import './styles.css'

const ListadePosts = ({blog}) => {
  return (
    <div className="bloglist-wrap">
      {
      blog.map((blog, index) => (
        <Posts blog={blog} key={index} id={index}/>
      ))
      }
    </div>
  );
};

export default ListadePosts;