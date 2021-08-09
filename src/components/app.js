import React, { lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';

// const Home = lazy(() => import('./Home'));
// const About = lazy(() => import('./About'));

const App = (props) => {
  const { path } = props.match;

  return (
    <div>
      <h1>Welcome!</h1>
      <div className="links">
        <Link to={`${path}`} className="link">Home</Link>
        <Link to={`${path}/about`} className="link">About</Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path={`${path}`} exact component={Home} />
          <Route path={`${path}/about`} component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default App;