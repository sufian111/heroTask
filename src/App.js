import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import Register from "./Component/Login/Register";
import BookMovie from "./Component/Home/BookMovie/BookMovie";
import SeatList from "./Component/Home/SeatList/SeatList";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/bookMovie/:id">
            <BookMovie></BookMovie>
          </PrivateRoute>

          <Route path="/movie/:id">
            <SeatList></SeatList>
          </Route>

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
