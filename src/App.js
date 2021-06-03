import "./App.css";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/Homepage";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import InfoDetail from "./containers/InfoDetail";
import Success from "./containers/Checkout/Success";
import Error from "./containers/Checkout/Error";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/info-detail" component={InfoDetail}>
        </Route>
        <Route path="/checkout/success">
          <Success />
        </Route>
        <Route path="/checkout/error">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
