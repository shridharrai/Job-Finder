import request from '../apis';
import history from '../history';
import {
  LOG_IN,
  SIGN_UP,
  LOG_OUT,
  POST_JOB,
  FETCH_POSTED_JOBS,
  FETCH_JOB_CANDIDATES
} from '../common/constants';

export const signUp = formValues => async dispatch => {
  const response = await request.post(`/auth/register`, formValues);
  console.log(response.data);
  dispatch({
    type: SIGN_UP,
    payload: response.data
  });
  history.push('/login');
};

export const logIn = formValues => async dispatch => {
  const response = await request.post(`/auth/login`, formValues);
  console.log(response.data);

  dispatch({
    type: LOG_IN,
    payload: response.data
  });
  history.push('/recruiter/dashboard');
};

export const logOut = () => dispatch => {
  localStorage.removeItem('state');
  dispatch({
    type: LOG_OUT
  });
  history.push('/');
};

export const postJob = (formValues, recruiter) => async dispatch => {
  const response = await request.post(`/jobs`, formValues, {
    headers: {
      Authorization: recruiter.authToken
    }
  });
  dispatch({
    type: POST_JOB,
    payload: response.data
  });
  history.push('/recruiter/dashboard');
};

export const fetchPostedJobs = recruiter => async dispatch => {
  const response = await request.get('/recruiters/jobs', {
    headers: {
      Authorization: recruiter.authToken
    }
  });
  console.log(response.data);
  dispatch({
    type: FETCH_POSTED_JOBS,
    payload: response.data
  });
};

export const fetchJobCandidates = (recruiter, job) => async dispatch => {
  const response = await request.get(`/recruiters/jobs/${job.id}/candidates/`, {
    headers: {
      Authorization: recruiter.authToken
    }
  });
  console.log(response.data);
  dispatch({
    type: FETCH_JOB_CANDIDATES,
    payload: response.data
  });
};
