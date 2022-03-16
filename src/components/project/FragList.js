import Fragrance from "./Fragrance";

function FragsList(props) {
  return (
    <div>
      {props.frags.map(frag => (
        <Fragrance
          key={frag.id}
          id={frag.id}
          name={frag.name}
          brand={frag.brand}
          timesUsed={frag.timesUsed}
          lastUsed={frag.lastUsed}
        />
      ))}
    </div>
  );
}

export default FragsList;
