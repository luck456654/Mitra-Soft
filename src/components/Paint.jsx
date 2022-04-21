import React, { useState,useEffect,useRef } from "react";
import { Link } from 'react-router-dom';
import "./Style.css";

/*Этот функциональный компонент формирует картинку*/
function Paint(props) {

  const paintRef1 = useRef()
  const buttonRef1 = useRef()
  
  function showButton(){
    buttonRef1.current.style="display:flex!important"
    console.log(props.content[props.i])   
    let AlbumId=props.content[props.i]?.albumId
    let id=props.content[props.i]?.id
    let title=props.content[props.i]?.title
    let ThumbnailUrl=props.content[props.i]?.thumbnailUrl
    let url=props.content[props.i]?.url

    localStorage.setItem('AlbumId', AlbumId);
    localStorage.setItem('id', id);
    localStorage.setItem('title', title);
    localStorage.setItem('ThumbnailUrl', ThumbnailUrl);
    localStorage.setItem('url', url);
  }
  function hideButton(){
    buttonRef1.current.style="display:none!important"
    
  }
 return <div>
      <div style={{
                  backgroundImage: `url(${props.content[props.i]?.thumbnailUrl})` ,
                }} className="paint" 
                onMouseOver={showButton} 
                onMouseOut={hideButton}
                ref={paintRef1}
                >
       <Link to="/paintinfo" className="link"><button ref={buttonRef1} id={props.content[props.i]?.id} className="button">Подробнее</button></Link>
      </div>
    </div>
  }
  export default Paint;