import logo from './logo.svg';
import './App.css';
import Search from './components/Search/search'
// import Nav from './components/Navbar/MenuItems'
import ImageCollage from './components/ImageCollage/imagecollage'
import React from 'react';
import { getAllGenres, getAllArtists, getAllAlbums } from './components/networkRequests';
import Genres from './components/Genres/Genres';
import Artists from './components/Artists/artists';
import Albums from './components/Albums/albums';
import AddArtist from './components/AddArtist/AddArtist'
// import AddArtist from './components/AddArtist/addartist';


class App extends React.Component {

  state = {
    genres: [],
    artists: [],
    addArtistOpen: false,
    albums: []
  }

  handleGenreClick = async() => {
    if (this.state.genres.length<1){
    this.setState({ genres: await getAllGenres() })
    } else this.setState({genres: []})
  }

  handleArtistClick = async() => {
    if (this.state.artists.length<1){
    this.setState({ artists: await getAllArtists() })
    } else this.setState({artists: []})
  }

  handleAlbumClick = async() => {
    if (this.state.albums.length<1){
    this.setState({ albums: await getAllAlbums() })
    } else this.setState({albums: []})
  }

  ////////////////////////////// This is my click handler to open the Add Artist component//////////

  toggleAddArtist = () => {
    this.setState({addArtistOpen:!this.state.addArtistOpen})
  }
  
  render() {
    return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Hip Hop Library</h1>
      <Search />
      <header className="App-header">
      {/* <Nav /> */}
      <div className="Buttons">
      <button onClick={this.handleGenreClick}>Genres</button>
      <button onClick={this.handleArtistClick}>Artists</button>
      <button onClick={this.toggleAddArtist}>Add Artists</button>
      <button onClick={this.handleAlbumClick}>Albums</button>
      {/* <button onClick={this.addArtistClick}>Add Artist</button> */}
      {/* <button onClick={this.addArtistClick}>Add Artist</button> */}
      {this.state.addArtistOpen ? <AddArtist /> : null}
      <Genres genres={this.state.genres}/>
      <Artists artists={this.state.artists}/>
      {/* <AddArtist addArtists={this.state.addArtists}/> */}
      <Albums albums={this.state.albums}/>
      </div>
      <ImageCollage />
        
      </header>
    </div>
  );
}
}

export default App;
