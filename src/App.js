import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./containers/Homepage";
import ProductDetail from "./containers/ProductDetail";
import InfoDetail from "./containers/InfoDetail";
import Success from "./containers/Checkout/Success";
import Error from "./containers/Checkout/Error";
function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/product-detail/:product_id">
            <ProductDetail />
          </Route>
          <Route path="/info-detail">
            <InfoDetail />
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
