import classes from "./Footer.module.css";
// import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>ART OF FRAGRANCE</p>
      <a
        rel="noreferrer noopener"
        href="https://www.freeprivacypolicy.com/live/6df86d26-2fdc-4ef2-8e4d-28ffff4877fc"
        target="_blank"
      >
        Privacy policy
      </a>
      <p className={classes.copyright}>Copyright &copy; 2022 Juan Zapien </p>
    </footer>
  );
}

export default Footer;
