import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCart";
import { Input } from "@chakra-ui/react";

function App() {
  //Managing movies and queries using useState hook
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //Calling fetchData function to get data from api whenerver query changes
  useEffect(() => {
    async function Fetchdata() {
      try {
        let res = await fetch(
          `https://www.omdbapi.com/?t=${searchQuery || "batman"}&apikey=bbe6805d`
        );
        var data = await res.json();
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    }
    Fetchdata();
  }, [searchQuery]);

  return (
    <div className="App">
      <h1>Movie App</h1>
     
      <Input
        placeholder="Search for movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {console.log(searchQuery)}

      <MovieCard prop={movies}></MovieCard>
    </div>
  );
}

export default App;
