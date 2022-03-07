import { Link } from "react-router-dom";

function Todays() {
  return (
    <>
      <main>
        <h2>Select your Fragrance of the day!</h2>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}

export default Todays;
