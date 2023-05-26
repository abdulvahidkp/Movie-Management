import "./App.css";
import MovieForm from "./components/movieForm/MovieForm";
import ListPart from './components/ListPart/ListPart'

function App() {

  return (
    <main className="main">
      <div className="app">
        <MovieForm />
        <ListPart/>
      </div>
    </main>
  );
}

export default App;
