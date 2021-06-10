import React from 'react';
import { addAlbum } from './components/networkRequests';

class AddAlbum extends React.Component {
    state = {
       artist_name: "",
       genre_id: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = () => {
        addArtist(this.state);
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
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default AddArtist;