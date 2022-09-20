import Fragrance from "./Fragrance";
import classes from "./FragList.module.css";

function FragsList(props) {
  return (
    <div className={classes.frags_columns}>
      {props.frags.map(frag => (
        <Fragrance
          key={frag.id}
          id={frag.id}
          name={frag.name}
          brand={frag.brand}
          timesUsed={frag.timesUsed}
          lastUsed={frag.lastUsed}
          img={frag.imgUrl}
        />
      ))}
    </div>
  );
}

export default FragsList;
