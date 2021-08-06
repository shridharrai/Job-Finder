import React, { useState } from 'react';
import { users } from '../../config';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import { renderInput, renderUserType } from '../../utils';
import { validate } from './validate';

const styles = {
  homeLink: {
    textDecoration: 'none'
  },
  headerRow: {
    marginTop: '30px',
    marginBottom: '30px'
  },
  signUpButton: {
    marginBottom: '20px'
  },
  alreadyHaveAnAccount: {
    fontSize: '1.1rem'
  }
};

const Signup = ({ handleSubmit, signUp }) => {
  const [signupButtonDisabled, ToggleSignupButton] = useState(false);

  const onSubmit = formValues => {
    if (formValues.userRole === users.candidate.type) {
      formValues.userRole = users.candidate.role;
    } else if (formValues.userRole === users.recruiter.type) {
      formValues.userRole = users.recruiter.role;
    }
    ToggleSignupButton(true);

    signUp(formValues)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        alert('Error');
        ToggleSignupButton(false);
      });
  };

  return (
    <Container>
      <title>Signup</title>

      <Row style={styles.headerRow}>
        <Col>
          <Link to='/' style={styles.homeLink}>
            <h1>Job Finder</h1>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)} className='ui form error'>
            <Field name='name' component={renderInput} label='Name' />

            <Field
              name='email'
              component={renderInput}
              label='Email'
              type='email'
            />

            <Field
              name='password'
              component={renderInput}
              label='Password'
              type='password'
            />

            <Field
              name='confirmPassword'
              component={renderInput}
              label='Confirm Password'
              type='password'
            />

            <Field
              name='userType'
              component={renderUserType}
              label='Signup for'
            />

            <Field name='skills' component={renderInput} label='Skills' />

            <button
              className='ui button primary'
              style={styles.signUpButton}
              disabled={signupButtonDisabled}
            >
              Signup
            </button>
          </form>

          <Link to='/login'>
            <small style={styles.alreadyHaveAnAccount}>
              Already have an account?
            </small>
          </Link>
        </Col>{' '}
      </Row>
    </Container>
  );
};

const formWrapped = reduxForm({
  form: 'signup',
  validate
})(Signup);

const actionCreators = { signUp };

export default connect(
  null,
  actionCreators
)(formWrapped);
