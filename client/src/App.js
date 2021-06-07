import logo from './logo.svg';
import './App.css';
import Search from './components/Search/search'
import Nav from './components/Navbar/MenuItems'
import ImageCollage from './components/ImageCollage/imagecollage'
import React from 'react';
import { getAllGenres, getAllArtists } from './networkRequests';
import Genres from './components/Genres/Genres';
import Artists from './components/Artists/artists';


class App extends React.Component {

  state = {
    genres: [],
    artists: [],
    albums: []
  }

  genreClick = async() => {
    this.setState({ genres: await getAllGenres() })
  }

  artistClick = async() => {
    this.setState({ artists: await getAllArtists() })
  }
  
  render() {
    return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Hip Hop Library</h1>
      <Search />
      <header className="App-header">
      <Nav />
      <button onClick={this.genreClick}>Genres</button>
      <button onClick={this.artistClick}>Artists</button>
      {/* <Artists /> */}
      <Genres genres={this.state.genres}/>
      <Artists artists={this.state.artists}/>
      
      
      <ImageCollage />
        
      </header>
    </div>
  );
}
}

export default App;
