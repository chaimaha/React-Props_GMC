import "./movies.css";
import React from "react";
import Card from "./movie_card/card.js";
import PropTypes, { object } from "prop-types";

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

movies.propTypes = {
  items: PropTypes.arrayOf(object),
};
