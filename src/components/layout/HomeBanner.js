import classes from "./HomeBanner.module.css";
import home_hero from "../../images/le_labo.jpg";
import { Link } from "react-router-dom";
function HomeBanner(props) {
  let userName = localStorage.getItem("userName");

  const todays = (
    <>
      . Your fragrance of the day is{" "}
      <strong>{props.fragToday.join(", ")}</strong>
    </>
  );
  return (
    <div className={classes.layout}>
      <div className={classes.img_background}>
        <img
          className={classes.login_img}
          src={home_hero}
          alt="login hero"
        ></img>
      </div>

      <div className={classes.banner}>
        <p className={classes.intro}>Hello there,</p>
        <h1 className={classes.app__text}>
          {" "}
          {userName}. Welcome to Art Of Fragrances
        </h1>
        <p className={classes.intro}>
          you currently have {props.fragNumber} Fragrances in your collection
          {props.fragToday.length <= 0
            ? `. You
              aren't wearing a scent today please add your scent the day.`
            : todays}
        </p>
        <nav>
          <Link
            to="/todays"
            className={classes.banner_action}
            frags={props.frags}
          >
            Add SOTD
          </Link>
        </nav>
      </div>
      {/* {props.children} */}
    </div>
  );
}
export default HomeBanner;
