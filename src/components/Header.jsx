import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./Style.css";



/*Этот функциональный компонент формирует хэдэр*/
function Header() {
    const burgerIcon = useRef()
    const burgerWrapper = useRef()
    const burgerClose = useRef()

    function showBurger(){
        burgerWrapper.current.style="transform: translateX(0%);transition: transform 1s ease-in;"
    }

    function hideBurger(){
        burgerWrapper.current.style="transform: translateX(-100%);transition: transform 1s ease-in;"
    }

    return <div>
        <div className="header__wrapper">
            <img src='./burger.png' className="burger" ref={burgerIcon} onClick={showBurger}></img>
            <div className="burger__wrapper" ref={burgerWrapper} onClick={hideBurger}>
             <div className="burger__close" ref={burgerClose}>X</div>   
            <Link to="/galery" className="burger__link">Галерея</Link>
            <Link to="/aboutus" className="burger__link">Обо мне</Link>
            </div>
        </div>
    </div>
}
export default Header;