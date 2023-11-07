import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCart";

function App() {
  //Managing movies and queries using useState hook
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");

  //Calling fetchData function to get data from api whenerver query changes
  useEffect(() => {
    async function Fetchdata() {
      try {
        let res = await fetch(
          `https://www.omdbapi.com/?s=${
            searchQuery || "batman"
          }&apikey=bbe6805d`
        );
        var data = await res.json();

        setMovies(data.Search);
      } catch (err) {
        console.log(err);
      }
    }
    Fetchdata();
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(search);
    console.log(search);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>

      <input
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>

      <div id="box">
        {movies.length === 1 ? (
          <MovieCard prop={movies[0]} />
        ) : (
          movies.map((movie, i) => <MovieCard key={i} prop={movie} />)
        )}
      </div>
    </div>
  );
}

export default App;
