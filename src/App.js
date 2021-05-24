import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./components/Button";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <>
              <Header text="Header" />
              <Button />
              <MainContent text="MainContent" />
              <Footer text="Footer" />
            </>
          </Route>
          <Route path="/detail-product">
            <Title text="Detail Product" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
