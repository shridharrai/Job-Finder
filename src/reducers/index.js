import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoggedInUser from './LoggedInUser';
import PostedJobs from './PostedJobs';
import JobCandidates from './JobCandidates';

export default combineReducers({
  form: formReducer,
  loggedInUser: LoggedInUser,
  postedJobs: PostedJobs,
  jobCandidates: JobCandidates
});
