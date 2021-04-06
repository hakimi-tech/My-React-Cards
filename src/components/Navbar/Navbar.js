import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";

import './Navbar.css'

class Navbar extends Component {

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img className="logo-image" src="https://pivony.com/wp-content/uploads/2020/08/logopivony-170x60-01-1.svg" alt=""/>
                    <hr className="hr"></hr>
                </h1>
                <div className="menu-icon">
            
                </div>
                <div className="nav-list">
                <ul className="menu-list">
                    {MenuItems.map((item, index) => {
                        return (
                            <li className="list" key={index}>
                                <a className={item.cName} href={item.url} id="item">
                                    {item.title} <i className={item.arrowDown}></i>
                                </a>
                            </li>
                    )
                    } )}
                    
                    

                </ul>
                </div>
            </nav>
            
        )
    }
}

export default Navbar