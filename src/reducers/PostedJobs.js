import { FETCH_POSTED_JOBS, LOG_OUT, POST_JOB } from '../common/constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTED_JOBS:
      if (!action.payload.data) {
        return [...state];
      } else {
        return action.payload.data.data;
      }

    case POST_JOB:
      return [...state, action.payload.data];

    case LOG_OUT:
      return [];

    default:
      return state;
  }
};
