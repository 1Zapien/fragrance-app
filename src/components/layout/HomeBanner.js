import classes from "./HomeBanner.module.css";
import home_hero from "../../images/le_labo.jpg";
function HomeBanner(props) {
  return (
    <div className={classes.layout}>
      <div className={classes.img_background}>
        <img
          className={classes.login_img}
          src={home_hero}
          alt="login hero"
        ></img>
      </div>
      {props.children}
    </div>
  );
}
export default HomeBanner;
