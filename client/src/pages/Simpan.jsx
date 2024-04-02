import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../img/unnamed.jpg"

const Simpan = () => {

  
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    
    <div className="containerSimpan">
      <br />
      <Navbar />
    <div className="simpan">
      <div className="posts">
        {posts.map((post)  => (
          <div className="post" key={post.id}>
            <div className="content">
              <div className="logo">
                  <img src={Logo} alt="Logo" />
                </div>
              <Link className="link" to={`/post/${post.id}`}>
                <h2 className="h1">Nama Product: </h2>
                <br />
                <h1>{post.title}</h1>
              </Link>
              <div className="bor">
                <p><h2>Review :</h2></p>
                <p>{getText(post.desc)}</p>
                <p><span><b><i>anonymous</i></b></span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
    <Footer />
    </div>
   
  );
};

export default Simpan;