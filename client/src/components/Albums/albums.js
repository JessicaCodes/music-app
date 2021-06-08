import React from 'react';
import './album.css'


function Albums(props) {
        return(
            <ul  
            className="albums">
                {props.albums.map((item, index) => {
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

export default Albums;