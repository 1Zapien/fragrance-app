import classes from "./Fragrance.module.css";
import icon from "../../images/calendar.png";
import counter from "../../images/counter.png";

function Fragrance(props) {
  // Function to remove the time from last used
  const removeTime = date => {
    return date
      .split(" ")
      .slice(0, 4)
      .join(" ");
  };

  return (
    <div>
      <div className={classes.frag_card}>
        <div className={classes.frag_title}>
          <h3>{props.name}</h3>
          <p>-{props.brand}</p>
        </div>

        <div className={classes.frag_cardInfo}>
          <p>
            <img src={counter} alt="counter icon"></img>
            {props.timesUsed} times used
          </p>

          <p>
            <img src={icon} alt="hero"></img>
            {removeTime(props.lastUsed)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fragrance;
