import "./movies.css";
import React from "react";
import Card from "./movie_card/card.js";
import PropTypes from "prop-types";

const movies = ({ items }) => {
  const handleData = (name) => alert(name);
  return (
    <div>
      {items.map((item) => (
        <Card item={item} handeldata={handleData} />
      ))}
    </div>
  );
};

export default movies;
movies.defaultprops = {
  id: Math.random(),
  image:
    "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
  rating: 4,
  name: "Devil's Mile",
  date: "2014",
  type: "Action | Crime",
  description:
    "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
};
movies.PropTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
};
