import logo from './logo.svg';
import './App.css';
import Search from './components/Search/search'
import Nav from './components/Navbar/MenuItems'
import ImageCollage from './components/ImageCollage/imagecollage'
import React from 'react';
import { getAllGenres, getAllArtists } from './networkRequests';
import Genres from './components/Genres/Genres';
import Artists from './components/Artists/artists';
import addArtist from './components/AddArtists/addartist';


class App extends React.Component {

  state = {
    genres: [],
    artists: [],
    albums: []
  }

  genreClick = async() => {
    if (this.state.genres.length<1){
    this.setState({ genres: await getAllGenres() })
    } else this.setState({genres: []})
  }

  artistClick = async() => {
    if (this.state.artists.length<1){
    this.setState({ artists: await getAllArtists() })
    } else this.setState({artists: []})
  }

  albumClick = async() => {
    if (this.state.albums.length<1){
    this.setState({ albums: await getAllAlbums() })
    } else this.setState({albums: []})
  }


  
  render() {
    return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Hip Hop Library</h1>
      <Search />
      <header className="App-header">
      {/* <Nav /> */}
      <button onClick={this.genreClick}>Genres</button>
      <button onClick={this.artistClick}>Artists</button>
      <button onClick={this.albumClick}>Albums</button>

      {/* <Artists /> */}
      <Genres genres={this.state.genres}/>
      <Artists artists={this.state.artists}/>
      <Albums albums={this.state.albums}/>
      
      
      <ImageCollage />
        
      </header>
    </div>
  );
}
}

export default App;
