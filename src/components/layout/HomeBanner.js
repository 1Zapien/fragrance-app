import classes from "./HomeBanner.module.css";
import home_hero from "../../images/le_labo.jpg";
function HomeBanner() {
  return (
    <div className={classes.layout}>
      {/* <h2>
        Hello Juan Zapien, you currently have 15 Fragrances. You currently have
        ___/none.
      </h2>
      <nav>
        <Link to="/todays">Add Todays Fragrance </Link>
      </nav> */}

      <div className={classes.img_background}>
        <img
          className={classes.login_img}
          src={home_hero}
          alt="login hero"
        ></img>
      </div>
    </div>
  );
}
export default HomeBanner;
