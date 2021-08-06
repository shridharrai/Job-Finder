import { passwordMinLength } from '../../config';

const ALPHABET_SPACE_REGEX = /^[a-zA-Z ]*$/;

export const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }
  if (formValues.name && !formValues.name.match(ALPHABET_SPACE_REGEX)) {
    errors.name = 'Name can only contain alphabets';
  }
  if (formValues.name && formValues.name.length < 3) {
    errors.name = 'Name should be minimun of length 3';
  }
  if (formValues.name && formValues.name.length > 50) {
    errors.name = 'Name should be maximum of length 50';
  }

  if (formValues.skills) {
    if (formValues.skills.length < 3) {
      errors.skills = 'Skills should be minimunm of length 3';
    }
    if (formValues.skills.length > 50) {
      errors.skills = 'Skills should be maximum of length 50';
    }
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }
  if (formValues.password && formValues.password.length < passwordMinLength) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (formValues.confirmPassword !== formValues.password) {
    errors.confirmPassword = 'Password did not matched';
  }

  if (!formValues.userRole) {
    errors.userType = 'You must select a user type';
  }

  return errors;
};
