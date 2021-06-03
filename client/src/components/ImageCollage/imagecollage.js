import React, { Component } from 'react';
import './imagecollage.css'

class ImageCollage extends Component {
    render() {
        return(
       
            <ul  
            className="imageContainer">
                        <li className="ImageList">
                            <img src="https://bit.ly/3ifgEeO"alt="Nas Illmatic" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3yXjQl3"alt="Baduizm" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3fJemmA"alt="Doggy Style" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3vNn0Gg"alt="Distant Relatives" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/34In12s"alt="The Blueprint" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3g9ntMn"alt="The Experience" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3fJfgiY"alt="Victory Lap" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3cew2nU"alt="Paper Trail" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3pnQNmA"alt="Dedication 2" loading="lazy"></img>
                        </li>
                        <li className="ImageList">
                            <img src="https://bit.ly/3yYYqnJ"alt="Who Is Jill Scott" loading="lazy"></img>
                        </li>
                    
            </ul>
        
        )
    }
}

export default ImageCollage;