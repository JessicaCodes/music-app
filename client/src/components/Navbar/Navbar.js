import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
        <nav 
        className="Nav">
            <ul  
            className="NavItems menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.link} href={item.url}>
                            {item.title}
                            </a>
                            <ul class="submenu">

            <li className="sublist"><a href="#">Add a {item.title} </a></li>

            <li className="sublist"><a href="#">Edit a {item.title}</a></li>

            <li className="sublist"><a href="#">Delete a {item.title}</a></li>
            </ul>

                        </li>
                    )
                })}
            </ul>
        </nav>
        )
    }
}

export default Navbar;