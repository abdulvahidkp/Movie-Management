import "./App.css";
import MovieForm from "./components/movieForm/MovieForm";
import MovieListPart from "./components/movieListPart/MovieListPart";

function App() {
  return (
    <main className="main">
      <div className="app">
        <MovieForm />
        <MovieListPart />
      </div>
    </main>
  );
}

export default App;
