import './App.css';

import { fetchMovies, fetchGenres } from './api/themoviedb'

import List from './components/list'


function App() {

  return (
    <div className="App">
      <List
        fetchMovies={fetchMovies}
        fetchGenres={fetchGenres}
      />
    </div>
  );
}

export default App;
