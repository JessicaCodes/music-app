import logo from './logo.svg';
import './App.css';
import Search from './components/Search/search'
import Nav from './components/Navbar/MenuItems'
import ImageCollage from './components/ImageCollage/imagecollage'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Hip Hop Library</h1>
      <Search />
      <header className="App-header">
      <Nav />
      <ImageCollage />
        
      </header>
    </div>
  );
}

export default App;
