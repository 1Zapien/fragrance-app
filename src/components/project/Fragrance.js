import classes from "./Fragrance.module.css";

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

        <p className={classes.frag_cardTimes}>Times Used: {props.timesUsed}</p>
        <p className={classes.frag_cardDate}>{removeTime(props.lastUsed)}</p>
      </div>
    </div>
  );
}

export default Fragrance;
