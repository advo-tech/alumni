import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import Home from "./Home";
import CapitalCampaignOld from "./CapitalCampaignOld";
import CapitalCampaign from "./CapitalCampaign";
import TrackerCampaign from "./TrackerCampaign";
import AnnualAppeal from "./AnnualAppeal";
import Navbar from './Navbar';
import Contact from './Contact';

function App() {
  return <MantineProvider
  
  
  theme={{
    fontFamily: 'Josefin Sans, Sans Serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
  }}
  
  >{
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/aid-campaign">
            <TrackerCampaign />
          </Route>
          <Route path="/capital-campaign">
          <TrackerCampaign />
            {/* <CapitalCampaign /> */}
          </Route>         
          <Route path="/capital-campaign-old">
            <CapitalCampaignOld />
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
}</MantineProvider>;
}

export default App;
