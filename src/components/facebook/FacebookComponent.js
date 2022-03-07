import React from "react";
import FacebookLogin from "react-facebook-login";

class FacebookComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId={process.env.REACT_APP_FBLOGIN}
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
  }
}

export default FacebookComponent;
