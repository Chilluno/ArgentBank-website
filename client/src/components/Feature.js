import React from "react"

export const Feature = ({title, desc, imgAlt, imgUrl}) => {
   return (<div className="feature-item">
   <img src={imgUrl} alt={imgAlt} className="feature-icon"/>
   <h3 className="feature-item-title">{title}</h3>
   <p>{desc}</p>
   </div>)
}