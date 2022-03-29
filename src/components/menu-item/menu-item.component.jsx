import React from "react";
import { Link, useNavigate }  from "react-router-dom"
import "./menu-item.styles.scss";


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  

  return(
    
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <Link className="content" to={`/${linkUrl}`}>

      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>

    </Link>
  </div>
  
  )
  };

export default MenuItem;
