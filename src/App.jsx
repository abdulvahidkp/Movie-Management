import "./App.css";
import MovieForm from "./components/movieForm/MovieForm";
import MovieList from "./components/movieList/MovieList";
import MovieSearch from "./components/movieSearch/MovieSearch";

function App() {
  return (
    <main className="main">
      <div className="app">
        <MovieForm />
        <div className="w-1/2 flex flex-col items-center">
          <MovieSearch />
          <MovieList />
        </div>
      </div>
    </main>
  );
}

export default App;
