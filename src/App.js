import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import CapitalCampaign from "./CapitalCampaign";
import AnnualAppeal from "./AnnualAppeal";
import Navbar from './Navbar';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/capital-campaign">
            <CapitalCampaign />
          </Route>
          <Route path="/annual-appeal">
            <AnnualAppeal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
