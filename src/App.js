import React, { useState } from "react";
import Header from "./Components/Header";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Footer from "./Components/Footer";
import theme from "./Components/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage"


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
       
                value={value}
  
                     setValue={setValue}
    
                   setSelectedIndex={setSelectedIndex}
       
                setValue={setValue}
         
          />
          <Switch>
            <Route
              exact
              path="/"
              component={LandingPage}
             
            
            ></Route>
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            ></Route>
            <Route
              exact
              path="/customSoftware"
              component={() => <div>customSoftware</div>}
            ></Route>
            <Route
              exact
              path="/mobileapps"
              component={() => <div>mobileapps</div>}
            ></Route>
            <Route
              exact
              path="/websites"
              component={() => <div>websites</div>}
            ></Route>
            <Route
              exact
              path="/revolution"
              component={() => <div>theRevolution</div>}
            ></Route>
            <Route
              exact
              path="/about"
              component={() => <div>AboutUs</div>}
            ></Route>
            <Route
              exact
              path="/contact"
              component={() => <div>ContactUs</div>}
            ></Route>
            <Route
              exact
              path="/estimate"
              component={() => <div>Estimate</div>}
            ></Route>
          </Switch>
          <Footer value={value} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setValue={setValue}/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
