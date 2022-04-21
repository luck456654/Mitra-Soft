import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Paint from "./Paint.jsx";
import Header from "./Header.jsx";
import "./Style.css";

const url = "https://jsonplaceholder.typicode.com/photos";
/*Этот функциональный компонент запрашивает по API информацию о картинках, затем выводит их используя компонент Paint*/
function Galery() {
  useEffect(() => {
    loadContent();
  }, []);
  loadContent();

  const [content, setContent] = useState([]);


  function loadContent() {
    let arrImg = [];
    axios
      .get(url)
      .then((res) => {
        for (let i = 0; i < 24; i++) {
          arrImg.push(res.data[i])
        }
        setContent(arrImg)
      })
  }

  return <div>
    <Header></Header>
    <h1>Галерея</h1>
    <p className="category">Категория1</p>
    <p className="category__content">
      <Paint i="0" button="button0" paint="paint0" content={content}></Paint>
      <Paint i="1" button="button1" paint="paint1" content={content}></Paint>
      <Paint i="2" button="button2" paint="paint2" content={content}></Paint>
      <Paint i="3" button="button3" paint="paint3" content={content}></Paint>
      <Paint i="4" button="button4" paint="paint4" content={content}></Paint>
      <Paint i="5" button="button5" paint="paint5" content={content}></Paint>

    </p>
    <p className="category">Категория2</p>
    <p className="category__content">
      <Paint i="6" button="button6" paint="paint6" content={content}></Paint>
      <Paint i="7" button="button7" paint="paint7" content={content}></Paint>
      <Paint i="8" button="button8" paint="paint8" content={content}></Paint>
      <Paint i="9" button="button9" paint="paint9" content={content}></Paint>
      <Paint i="10" button="button10" paint="paint10" content={content}></Paint>
      <Paint i="11" button="button11" paint="paint11" content={content}></Paint>

    </p>
    <p className="category">Категория3</p>
    <p className="category__content">
      <Paint i="12" button="button12" paint="paint12" content={content}></Paint>
      <Paint i="13" button="button13" paint="paint13" content={content}></Paint>
      <Paint i="14" button="button14" paint="paint14" content={content}></Paint>
      <Paint i="15" button="button15" paint="paint15" content={content}></Paint>
      <Paint i="16" button="button16" paint="paint16" content={content}></Paint>
      <Paint i="17" button="button17" paint="paint17" content={content}></Paint>

    </p>
    <p className="category">Категория4</p>
    <p className="category__content">
      <Paint i="18" button="button18" paint="paint18" content={content}></Paint>
      <Paint i="19" button="button19" paint="paint19" content={content}></Paint>
      <Paint i="20" button="button20" paint="paint20" content={content}></Paint>
      <Paint i="21" button="button21" paint="paint21" content={content}></Paint>
      <Paint i="22" button="button22" paint="paint22" content={content}></Paint>
      <Paint i="23" button="button23" paint="paint23" content={content}></Paint>

    </p>
  </div>
}
export default Galery;