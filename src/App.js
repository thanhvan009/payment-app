import "./App.css";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./containers/Homepage";
import InfoDetail from "./containers/InfoDetail";
import Success from "./containers/Checkout/Success";
import Error from "./containers/Checkout/Error";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Layout>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <HomePage />
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
    </Layout>
  );
}

export default App;
