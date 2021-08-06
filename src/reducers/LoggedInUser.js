import { LOG_IN, LOG_OUT } from '../common/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        authToken: action.payload.data.token,
        userRole: action.payload.data.userRole
      };

    case LOG_OUT:
      return {};

    default:
      return state;
  }
};
