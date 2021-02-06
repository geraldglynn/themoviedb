import './App.css';
import { fetchMovies } from './api/themoviedb'
import List from './components/list'

function App() {

  return (
    <div className="App">
      <List
        fetchMovies={fetchMovies}
      />
    </div>
  );
}

export default App;
