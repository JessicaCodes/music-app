import React from 'react';
import { addArtist } from '../networkRequests';

class AddArtist extends React.Component {
    state = {
       artist_name: "",
       genre_id: ""
    }

    submitArtistClick = () => {
        addArtist(this.state);
        this.setState({ artist_name: "", genre_id: ""})
        
      }

    render(){
        return(
            <div className="add-artist-wrap">
                <h1>Add Artist</h1>
                <label>Artist ID: </label>
                <input onChange={this.handleChange} name="id"></input>
                <label>Artist Name: </label>
                <input onChange={this.handleChange} name="artist_name"></input>
                <label>Genre ID: </label>
                <input onChange={this.handleChange} name="genre_id"></input>
                <button onClick={this.submitArtistClick}>Submit</button>
            </div>
        )
    }
}

export default AddArtist;