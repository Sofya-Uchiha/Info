import React, { useEffect, useState } from "react";
import { getRandomInt } from "../functions/functions";
import Moon from "./Moon";
import Star from "./Star";
import "./Zve.css";

function Zve() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = stars;
    const countStars = getRandomInt(0, 100);

    for (let i = 0; i < countStars; i++) {
      const star = {
        left: getRandomInt(0, 100) + "%",
        top: getRandomInt(0, 100) + "%",
      };

      newStars.push(star);
    }

    setStars([...newStars]);
  }, []);
  const changeSky = (event) => {
    const newStars = stars;
    newStars.push({
      left: event.pageX-6,
      top: event.pageY-6,
    });
    setStars([...newStars])
  };
  return (
    <div className="Zve" onClick={(event) => changeZve(event)}>
      <Moon />
      {stars.map((star, index) => (
        <Star star = {star} key={index} />
      ))}
    </div>
  );
}

export default Zve;
