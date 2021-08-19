import "./card.css";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const Card = ({ item, handeldata }) => {
  return (
    <div className="card" onClick={() => handeldata(item.name)}>
      <div className="card_left">
        <img src={item.image} alt="img" />
      </div>
      <div className="card_right">
        <h1>{item.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{item.date || "default"}</li>
            <li>{item.time}</li>
            <li>{item.type}</li>
          </ul>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={item.rating} readOnly />
          </Box>
        </div>
        <div className="card_right__review">
          <p>{item.description}</p>
          <a
            href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
            target="_blank"
          >
            Read more
          </a>
        </div>
        <div className="card_right__button">
          <a href="https://www.youtube.com/watch?v=ot6C1ZKyiME" target="_blank">
            WATCH TRAILER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
Card.defaultProps = {
  item: {
    id: Math.random(),
    image:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    rating: 4,
    name: "Devil's Mile",
    date: "2014",
    type: "Action | Crime",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
};
