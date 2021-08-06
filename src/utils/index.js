import React from 'react';
import { Field } from 'redux-form';

export const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className='ui error message'>
        <div className='ui header'>{error}</div>
      </div>
    );
  }
};

export const renderInput = ({
  input,
  label,
  meta,
  type = 'text',
  placeholder = ''
}) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} />
      {renderError(meta)}
    </div>
  );
};

export const renderUserType = ({ label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <Field name='userRole' component='select'>
        <option></option>
        <option value='candidate'>Candidate</option>
        <option value='recruiter'>Recruiter</option>
      </Field>
      {renderError(meta)}
    </div>
  );
};
