// react
import React from 'react';

// routes
import { 
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'


// components
import Home from '../Home/index';
import NavBar from '../NavBar/NavBar';
import props from '../props/props';
import StateFulComponent from '../StatefulComponent/StatefulComponent';
import Bind from '../Bind/Bind';
import State from '../State/State';
import LifeCycle from '../LifecycleMethods/lifecyle';
import Events from '../Events/events'

// css
import '../App.css';


const AppRouter = () => {
  return (
    <div className="container">
      <Router>
        {/* Navigation bar */}
        <NavBar />
          
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/props' component={props} />
          <Route path='/statefulcomponent' component={StateFulComponent} />
          <Route path='/bind' component={Bind} />
          <Route path='/state' component={State} />
          <Route path='/lifecycle' component={LifeCycle} />
          <Route path='/event' component={Events} />
        </Switch>
    </Router>
    </div>
  );
}

export default AppRouter;