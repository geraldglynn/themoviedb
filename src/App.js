import logo from './logo.svg';
import './App.css';
import { fetchMovies } from './api/themoviedb'
import Listing from './components/listing'

function App() {

  fetchMovies().then(reponse => console.log(reponse))
  return (
    <div className="App">
      <Listing />
    </div>
  );
}

export default App;
