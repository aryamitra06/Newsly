import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navbar from './components/Navbar';

//type rcc to import boiler template of react class based component

import React from 'react'
import News from './components/News';

const App = () => {
    return (
      <>
      <Router>
      <Navbar/>
      <Switch>
              <Route exact path="/">
                <News  key="1" category="general"/>
              </Route>
              <Route exact path="/business">
              <News category="business" key="2"/>
              </Route>
              <Route exact path="/entertainment">
              <News category="entertainment" key="3"/>
              </Route>
              <Route exact path="/health">
              <News category="health" key="4"/>
              </Route>        
              <Route exact path="/science">
              <News category="science" key="5"/>
              </Route>  
              <Route exact path="/sports">
              <News category="sports" key="6"/>
              </Route>  
              <Route exact path="/technology">
              <News category="technology" key="7"/>
              </Route>     
      </Switch>
      </Router>
     
      </>
    )
}

export default App;