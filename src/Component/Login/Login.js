import React, { useContext } from "react";
import {
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputLabel,
} from "@material-ui/core";
import firebase from "firebase";
import google from "../../Image/google.png";

import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import "./login.css";

import firebaseConfig from "./firebaseConfig";
import NavBarSection from "../Home/NavBarSection/NavBarSection";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  document.title = "Volunteer Network | Authentication";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //sign in with google provider
  const googleSigninHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser({
          ...loggedInUser,
          email: result.user.email,
          name: result.user.displayName,
          uid: result.user.uid,
          isSignedIn: true,
        });
        history.replace(from);
      })
      .catch((error) => console.log(error));
  };

  // sign up with email and password
  const emailPassSignupHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        `${loggedInUser.inputEmail}`,
        `${loggedInUser.inputPassword}`
      )
      .then((result) => {
        loggedInUser({ ...loggedInUser, isSignedUp: true });
      })
      .catch((error) => console.log(error));
  };

  // sign in with email and password
  const emailPassSigninHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        `${loggedInUser.inputEmail}`,
        `${loggedInUser.inputPassword}`
      )
      .then((result) => {
        loggedInUser({
          ...loggedInUser,
          isSignedIn: true,
          email: result.user.email,
        });
        history.replace(from);
      })
      .catch((error) => console.log(error));
  };

  // token verify

  return (
    <>
      <div>
        <NavBarSection></NavBarSection>
        <div>
          <FormGroup
            style={{
              width: "300px",
              border: "1px solid lightgray",
              padding: "30px",
              borderRadius: "10px",
              margin: "auto",
              marginTop: "20vh",
            }}
          >
            {loggedInUser.isSignedUp ? (
              <b style={{ textAlign: "center" }}>Login</b>
            ) : (
              <b style={{ textAlign: "center" }}>Create an Account</b>
            )}
            <FormControl style={{ marginBottom: "5px" }}>
              <InputLabel>Email address</InputLabel>
              <Input
                onBlur={(event) =>
                  loggedInUser({
                    ...loggedInUser,
                    inputEmail: event.target.value,
                  })
                }
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl style={{ marginBottom: "15px" }}>
              <InputLabel>Password</InputLabel>
              <Input
                onBlur={(event) =>
                  loggedInUser({
                    ...loggedInUser,
                    inputPassword: event.target.value,
                  })
                }
                aria-describedby="my-helper-text"
              />
            </FormControl>
            {loggedInUser.isSignedUp ? (
              <button onClick={emailPassSigninHandler} className="blue-button">
                Sign in
              </button>
            ) : (
              <button
                onClick={emailPassSignupHandler}
                className="blue-button w-100"
              >
                Sign up
              </button>
            )}
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              onClick={googleSigninHandler}
              style={{
                margin: "auto",
                cursor: "pointer",
                width: "270px",
                marginTop: "20px",
                borderRadius: "30px",
                padding: "0",
              }}
            >
              <Grid item>
                <img
                  style={{ width: "35px", margin: "0", padding: "0" }}
                  src={google}
                  alt=""
                />
              </Grid>
              <Grid style={{ marginBottom: "5px", marginLeft: "10px" }} item>
                Continue with Google
              </Grid>
            </Grid>

            {loggedInUser.isSignedUp ? (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                Don't have an account?
                <span
                  onClick={() =>
                    loggedInUser({ ...loggedInUser, isSignedUp: false })
                  }
                  style={{
                    color: "#3F90FC",
                    marginLeft: "10px",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                >
                  Create an account
                </span>
              </div>
            ) : (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                Already have an account?
                <span
                  onClick={() =>
                    loggedInUser({ ...loggedInUser, isSignedUp: true })
                  }
                  style={{
                    color: "#3F90FC",
                    marginLeft: "10px",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                >
                  Sign In
                </span>
              </div>
            )}
          </FormGroup>
        </div>
      </div>
      {/* <button onClick={()=>loggedInUser({...user, isSignedUp:true})}>toggle</button> */}
    </>
  );
};

export default Login;
