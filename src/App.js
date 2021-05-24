import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './containers/Homepage';
import ProductDetail from './containers/ProductDetail';
import InfoDetail from './containers/InfoDetail';
import CheckoutPage from './containers/CheckoutPage'
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
          <Route path="/checkout" component={CheckoutPage}>
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
