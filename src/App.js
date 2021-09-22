import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/CryptoApp/">
                <HomePage />
              </Route>
              <Route exact path="/CryptoApp/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/CryptoApp/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/CryptoApp/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/CryptoApp/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <Footer />
      </div>
    </div>
  );
}

export default App;
