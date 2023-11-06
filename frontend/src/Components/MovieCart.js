import { Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./MovieCart.css";


const MovieCard = ({ prop }) => {
  const [flag, setFlag] = useState(false);

 
  return (
      <div>
        <div>
          <Image
            id="image"
            style={{ width: "150px", padding: "10px" }}
            src={prop.Poster}
            alt="Poster Not Found"
          />
        </div>

        <div className="details">
          <div> <b>Title: {prop.Title}</b></div>
        </div>

        <div>
        
          <div>
{
        flag ? <div className="details">`<b>Director:</b>  {prop.Director}<br/>
        <b>Actors:</b>{prop.Actors}<br/>
        <b>Awards:</b>{prop.Awards}<br/>
        <b>Year: </b>{prop.Year}<br/>
        <b>Genre: </b> {prop.Genre}<br/>
        <b>IMDB Rating:</b> {prop.imdbRating}<br/>
        `</div>  :<Button onClick={()=>setFlag(true)}>See More</Button>
       }
          </div>
        </div>
      </div>

  );
};

export default MovieCard;
