import React, { Component } from 'react';
import './genres.css'


class Genres extends Component {
    render() {
        return(
            <ul  
            className="genres">
                {this.props.genres.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span>{item.id}</span>
 
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Genres;