import React from 'react';
import './genres.css'



function Genres(props) {
        return(
            <ul  
            className="genres">
                {props.genres.map((item, index) => {
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


export default Genres;