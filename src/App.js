// import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import LandingPage from './containers/landingPage';
import SignUp from './containers/signUp';
import Login from './containers/login';
import RecruiterDashboard from './containers/RecruiterDashboard';
import PostJob from './containers/PostJob';
import JobCandidates from './containers/JobCandidates';

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />

            <Route path='/recruiter/dashboard' component={RecruiterDashboard} />
            <Route path='/post/job' component={PostJob} />
            <Route path='/job/candidates' component={JobCandidates} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
