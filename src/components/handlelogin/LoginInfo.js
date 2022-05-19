// import login_img from "../../images/login_update.jpg";
import login_img from "../../images/test.gif";
import classes from "./LoginInfo.module.css";
import "../../App.css";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function LoginInfo() {
  const navigate = useNavigate();
  const provider = new FacebookAuthProvider();

  const authCtx = useContext(AuthContext);

  const auth = getAuth(firebase);
  console.log(authCtx.isLoggedIn);

  function loginHandler() {
    if (authCtx.isLoggedIn) {
      console.log("login should be true");

      return navigate("/home", { replace: true });
    } else {
      signInWithPopup(auth, provider).then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // console.log("this is the token " + token);
        const user = result.user;
        const userID = user.uid;
        const userName = user.displayName;

        const expirationTime = new Date(new Date().getTime() + 3600000);
        authCtx.login(token, expirationTime.toISOString(), userID, userName);
        return navigate("/home", { replace: true });
      });
    }
  }

  return (
    <div className={classes.layout}>
      <div className={classes.img_background}>
        <img
          className={classes.login_img}
          src={login_img}
          alt="login hero"
        ></img>
      </div>
      <div className={classes.login_data}>
        <h1>ART OF FRAGRANCE</h1>
        <p className={classes.app__text}>
          Keep track of your fragrance collection and your use pattern for each
          fragrance
        </p>

        <button onClick={loginHandler} className={classes.banner_action}>
          Log in with Facebook
        </button>
      </div>
    </div>
  );
}

export default LoginInfo;
