import React, { Component } from 'react';
import './artists.css';


class Artists extends Component {
    // constructor(props){
    //     super(props);
    //         this.state = {
    //             expanded: false,
    //             artists: []

    //         }
    //     }

    //     artistClick = async() => {
    //     //  this.setState({expanded:!this.state.expanded})
    //         this.setState({ artists: await getAllArtists() })
    //       }
        
    render() {
        return(
            <ul className="artists">
                {this.props.artists.map((item, index) => {
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
}
        


export default Artists;