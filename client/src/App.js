import React from "react";
import ProtectedRoute from './components/Protectedroute'
import EProtectedRoute from './components/Emproute'
import Rpc from "./reparateurs/connexion"
import SignupForm from "./reparateurs/addintervention"
import Ec from "./workers/connexion"
import Home from "./Home"
import RepaList from "./components/RepaList"
import Interventions from "./reparateurs/Interventions"
import int from "./workers/interventions"
import Int from "./reparateurs/intervention"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Vehicules from "./workers/vehicules";
import Reparateurs from "./workers/reparateurs";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path={["/reparateurs/", "/reparateurs/connexion"]} reauth={localStorage.getItem('reauth')}>
          <Rpc/>
          </Route>
          <ProtectedRoute exact path="/reparateurs/addintervention" reauth={localStorage.getItem('reauth')} component={SignupForm}/>
          <ProtectedRoute exact path="/reparateurs/intervention/:id" reauth={localStorage.getItem('reauth')} component={Int}/>


          <Route exact path={["/workers", "/workers/connexion"]} empauth={localStorage.getItem('empauth')}>
          <Ec/>
          </Route>

          <EProtectedRoute exact path="/workers/vehicules" empauth={localStorage.getItem('empauth')} component={Vehicules}/>
          <EProtectedRoute exact path="/workers/reparateurs" empauth={localStorage.getItem('empauth')} component={Reparateurs}/>
          <EProtectedRoute exact path="/workers/interventions" empauth={localStorage.getItem('empauth')} component={int}/>

          <ProtectedRoute exact path="/reparateurs/interventions" reauth={localStorage.getItem('reauth')} component={Interventions}/>

        </Switch>
    </div>
    </Router>

 
  );
}

export default App;
