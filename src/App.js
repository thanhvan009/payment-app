import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './containers/Homepage';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
