import { LOG_OUT, FETCH_JOB_CANDIDATES } from '../common/constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOB_CANDIDATES:
      if (!action.payload.data) {
        return [...state];
      } else {
        return action.payload.data;
      }

    case LOG_OUT:
      return [];

    default:
      return state;
  }
};
