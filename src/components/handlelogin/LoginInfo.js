import login_img from "../../images/loginhero.jpg";
import classes from "./LoginInfo.module.css";
import "../../App.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const responseFacebook = response => {
  console.log(response);
};

function LoginInfo() {
  return (
    <div className={classes.layout}>
      <div className={classes.img_background}>
        <img
          className={classes.login_img}
          src={login_img}
          alt="login hero"
        ></img>
      </div>
      <h1>ART OF FRAGRANCE</h1>
      <p className={classes.app__text}>
        Keep track of your fragrance collection and the last times you wore each
        of them.
      </p>
      {/* <nav>
        <Link to="home">Log in with Facebook -></Link>
      </nav> */}
      {/* <FacebookComponent /> */}
      <FacebookLogin
        appId={process.env.REACT_APP_FBLOGIN}
        autoLoad
        callback={responseFacebook}
        render={renderProps => (
          <button onClick={renderProps.onClick}>Log in with Facebook -></button>
        )}
      />
    </div>
  );
}

export default LoginInfo;
