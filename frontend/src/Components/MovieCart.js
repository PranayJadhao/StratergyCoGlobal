import { Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./MovieCart.css";

const MovieCard = ({ prop }) => {
  const [flag, setFlag] = useState(false);

  return (
    <div id="outerBox">
      <div>
        <Image
          id="image"
          style={{ width: "150px", padding: "10px" }}
          src={prop.Poster}
          alt="Poster Not Found"
        />
      </div>
      <div className="details">
        <div>
          {" "}
          <b>Title: {prop.Title}</b>
        </div>
      </div>

      <div>
        <div>
          {flag ? (
            <div className="details">
              `<b>Director:</b> {prop.Director}
              <br />
              <b>Type:</b>
              {prop.Type}
              <br />
              <b>Year: </b>
              {prop.Year}
              <br />`
            </div>
          ) : (
            <Button id="moreButton" onClick={() => setFlag(true)}>
              See More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
