import logo from './logo.svg';
import './App.css';
import Search from './components/Search/search'
import Nav from './components/Navbar/MenuItems'
import ImageCollage from './components/ImageCollage/imagecollage'
import React from 'react';
import { getAllGenres } from './networkRequests'
import Genres from './components/Genres/Genres'

class App extends React.Component {

  state = {
    genres: [],
    artists: [],
    albums: []
  }

  genreClick = async() => {
    this.setState({ genres: await getAllGenres() })
  }

  
  render() {
    return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Hip Hop Library</h1>
      <Search />
      <header className="App-header">
      <Nav />
      <button onClick={this.genreClick}>genres</button>
      <Genres genres={this.state.genres}/>
      
      <ImageCollage />
        
      </header>
    </div>
  );
}
}

export default App;
