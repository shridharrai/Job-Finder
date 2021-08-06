export const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (formValues.title) {
    if (formValues.title.length < 3) {
      errors.title = 'Title should be minimun of length 3';
    }
    if (formValues.title.length > 50) {
      errors.title = 'Title should be maximum of length 50';
    }
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  if (formValues.description) {
    if (formValues.description.length < 3) {
      errors.description = 'Description should be minimun of length 3';
    }
    if (formValues.description.length > 150) {
      errors.description = 'Description should be maximum of length 150';
    }
  }

  if (!formValues.location) {
    errors.location = 'You must enter a location';
  }
  if (formValues.location) {
    if (formValues.location.length < 3) {
      errors.location = 'Location should be minimun of length 3';
    }
    if (formValues.location.length > 50) {
      errors.location = 'Location should be maximum of length 50';
    }
  }

  return errors;
};
