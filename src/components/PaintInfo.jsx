import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from 'react-router-dom';
import Header from "./Header.jsx";

/*Этот функциональный компонент формирует Подробную информацию о выбранной картине*/
const PaintInfo = () => {
    let AlbumId = localStorage.getItem('AlbumId');
    let id = localStorage.getItem('id');
    let title = localStorage.getItem('title');
    let ThumbnailUrl = localStorage.getItem('ThumbnailUrl');
    let url = localStorage.getItem('url');

    return <div>
        <Header></Header>
    <h2>O картине</h2>
    <div className="paintInfo__about">
    <img src={ThumbnailUrl} className="paint"/>
    <div className="paintInfo__desk">
            <h3>Название альбома - {AlbumId}</h3>
        <p>Идентификатор картины - {id}</p>
        <p>Название картины - {title}</p>
        <p>Адрес картины в интернете - {url}</p>
        <p>Дополнительный адрес картины в интернете - {ThumbnailUrl}</p>
        </div>
        </div>
        <Link to="/galery" >Назад</Link>
      
    </div>



};

export default PaintInfo;