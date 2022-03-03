import { Link } from "react-router-dom";
function Home() {
  return (
    <main>
      <h2>
        Hello Juan Zapien, you currently have 15 Fragrances. You currently have
        ___/none.
      </h2>
      <nav>
        <Link to="/todays">Add Todays Fragrance </Link>
      </nav>
    </main>
  );
}

export default Home;
