function Fragrance(props) {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>Times Used: {props.timesUsed}</p>
        <p>{props.lastUsed}</p>
      </div>
    </div>
  );
}

export default Fragrance;
