import { Link } from "react-router-dom";

function Todays() {
  return (
    <>
      <main>
        <h2>Select your Fragrance of the day!</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Todays;
