import { Link } from "react-router-dom";
function HomeBanner() {
  return (
    <div>
      <h2>
        Hello Juan Zapien, you currently have 15 Fragrances. You currently have
        ___/none.
      </h2>
      <nav>
        <Link to="/todays">Add Todays Fragrance </Link>
      </nav>
    </div>
  );
}
export default HomeBanner;
