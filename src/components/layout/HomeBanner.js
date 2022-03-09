import { Link } from "react-router-dom";
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

      <h2 className={classes.app__text}>
        Hello Juan Zapien, you currently have 15 Fragrances. You currently have
        ___/none.
      </h2>
      {/* <nav>
        <Link to="home">Log in with Facebook -></Link>
      </nav> */}
      {/* <FacebookComponent /> */}
      <nav>
        <Link to="/addfragrance" className={classes.banner_action}>
          Add Fragrance
        </Link>
      </nav>
    </div>
  );
}
export default HomeBanner;
