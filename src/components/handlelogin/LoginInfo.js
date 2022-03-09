import login_img from "../../images/loginhero.jpg";
import classes from "./LoginInfo.module.css";
import "../../App.css";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import "../../firebase";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function LoginInfo() {
  const provider = new FacebookAuthProvider();

  const authCtx = useContext(AuthContext);

  const auth = getAuth();
  console.log("this is auth " + auth);
  console.log(authCtx.isLoggedIn);

  // const user = auth.currentUser;

  function loginHandler(event) {
    if (authCtx.isLoggedIn) {
      console("login should be true");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      // console.log(user);

      <Navigate to="/home" replace={true} />;
    } else {
      signInWithPopup(auth, provider)
        .then(result => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          console.log(result);

          console("trying to login");

          // const user = result.user;
          authCtx.login(token);
          console.log(authCtx.isLoggedIn);
          <Navigate to="/home" replace={true} />;
        })
        .catch(error => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log("this is the error code" + errorCode);

          const errorMessage = error.message;
          console.log("this is the error message " + errorMessage);
          // The email of the user's account used.
          const email = error.email;
          console.log("emailed used " + email);

          // AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          // ...

          console.log("credentials error " + credential);
          event.preventDefault();
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
      <h1>ART OF FRAGRANCE</h1>
      <p className={classes.app__text}>
        Keep track of your fragrance collection and the last times you wore each
        of them.
      </p>
      {/* <nav>
        <Link to="home">Log in with Facebook -></Link>
      </nav> */}
      {/* <FacebookComponent /> */}
      {/* <FacebookLogin
        appId={process.env.REACT_APP_FBLOGIN}
        autoLoad
        callback={responseFacebook}
        render={renderProps => (
          <button onClick={renderProps.onClick}>Log in with Facebook -></button>
        )}
      /> */}
      <button onClick={loginHandler}>Log in with Facebook -></button>
    </div>
  );
}

export default LoginInfo;
