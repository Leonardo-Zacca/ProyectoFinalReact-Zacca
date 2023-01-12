import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <ul className="nav-list">
            <li className="nav-item logo">
                <Link to="/"><img src="https://leonardo-zacca.github.io/ProyectoFinalJS-Zacca/images/logo.png" alt="logo" /></Link>
            </li>
            <li className="nav-item">
                <Link to="/category/impresoras">Impresoras</Link>    
            </li>
            <li className="nav-item">
                <Link to="/category/componentes">Componentes</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/filamentos">Filamentos</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/otros">Otros</Link>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
