import React from 'react';
import './artists.css';


function Artists(props) {

    return(
        <ul className="artists">
            {props.artists.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>{item.id}</span>
                        <span>{item.genre_id}</span>

                    </li>
                )
            })}
        </ul>
    )
}
        


export default Artists;