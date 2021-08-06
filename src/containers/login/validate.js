import { passwordMinLength } from '../../config';

export const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = 'You must enter an email';
  }
  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }
  if (formValues.password && formValues.password.length < passwordMinLength) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};
